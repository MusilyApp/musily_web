<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

definePageMeta({
  layout: 'default',
});

// Cache keys and expiration duration
const cacheKey = 'latestReleaseData';
const cacheExpirationKey = 'latestReleaseExpiration';
const cacheDuration = 10 * 60 * 1000; // 10 minutes in milliseconds

// UI state management
const isLoading = ref(true);
const hasError = ref(false);
const errorMessage = ref('');

// Platform-specific download URLs
const androidUrl = ref<string | null>(null);
const windowsUrl = ref<string | null>(null);
const linuxUrl = ref<string | null>(null);

// Release data
const releaseData = ref<{
  version: string | null,
  publishedAt: string | null
}>({
  version: null,
  publishedAt: null
});

// Platform detection
const userPlatform = ref(0);

// Detect user platform using userAgent
function detectPlatform() {
  const userAgent = navigator.userAgent.toLowerCase();
  
  // Check for Windows
  if (userAgent.includes('windows') || userAgent.includes('win64') || userAgent.includes('win32')) {
    return 1; // Windows tab index
  } 
  // Check for Linux
  else if (userAgent.includes('linux') && !userAgent.includes('android')) {
    return 2; // Linux tab index
  } 
  // Check for Android
  else if (userAgent.includes('android')) {
    return 0; // Android tab index
  }
  
  return 0; // Default to Android if cannot detect
}

// Format date
const formattedDate = computed(() => {
  if (!releaseData.value.publishedAt) return '';
  return new Date(releaseData.value.publishedAt).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

/**
 * Extracts platform-specific download URLs from GitHub release assets
 * @param assets Array of GitHub release assets
 */
function extractPlatformUrls(assets: any[]) {
  // Reset URLs
  androidUrl.value = null;
  windowsUrl.value = null;
  linuxUrl.value = null;
  
  if (!assets || assets.length === 0) return;
  
  assets.forEach(asset => {
    const name = asset.name.toLowerCase();
    const url = asset.browser_download_url;
    console.log(asset);
    
    if (name.endsWith('.apk')) {
      androidUrl.value = url;
    } else if (name.includes('win') || name.includes('windows')) {
      windowsUrl.value = url;
    } else if (name.endsWith('.flatpak')) {
      linuxUrl.value = url;
    } else if (name.includes('linux') && !name) {
      linuxUrl.value = url;
    }
  });
}

/**
 * Fetches the latest release data from the GitHub API.
 * Uses caching to reduce unnecessary API requests.
 */
async function getLatestReleaseData() {
  isLoading.value = true;
  hasError.value = false;
  
  // Check localStorage for cached data
  const cachedData = localStorage.getItem(cacheKey);
  const cachedExpiration = localStorage.getItem(cacheExpirationKey);

  if (cachedData && cachedExpiration && Date.now() < Number(cachedExpiration)) {
    const parsed = JSON.parse(cachedData);
    releaseData.value = {
      version: parsed.version,
      publishedAt: parsed.publishedAt
    };
    androidUrl.value = parsed.androidUrl;
    windowsUrl.value = parsed.windowsUrl;
    linuxUrl.value = parsed.linuxUrl;
    isLoading.value = false;
    return;
  }

  // If no valid cache, fetch from GitHub API
  try {
    const response = await axios.get(
      'https://api.github.com/repos/MusilyApp/musily/releases/latest',
    );
    
    const assets = response.data.assets;
    if (assets && assets.length > 0) {
      // Extract platform-specific URLs
      extractPlatformUrls(assets);
      
      const newData = {
        version: response.data.tag_name,
        publishedAt: response.data.published_at,
        androidUrl: androidUrl.value,
        windowsUrl: windowsUrl.value,
        linuxUrl: linuxUrl.value
      };
      
      releaseData.value = {
        version: newData.version,
        publishedAt: newData.publishedAt
      };

      // Save new data to localStorage with expiration
      localStorage.setItem(cacheKey, JSON.stringify(newData));
      localStorage.setItem(
        cacheExpirationKey,
        (Date.now() + cacheDuration).toString(),
      );
    } else {
      throw new Error('No assets found in the latest release.');
    }
  } catch (error) {
    hasError.value = true;
    errorMessage.value = error instanceof Error ? error.message : 'Failed to fetch latest release';
    console.error('Error fetching release:', error);
  } finally {
    isLoading.value = false;
  }
}

function trackDownload(platform: string) {
  console.log(`Download clicked for platform: ${platform}`);
}

onMounted(async () => {
  userPlatform.value = detectPlatform();
  await getLatestReleaseData();
});
</script>

<template>
  <div class="download-page d-flex flex-col align-center justify-center px-5">
    <nav class="d-flex justify-center mb-4">
      <MusilyLogo width="150px" height="150px" />
    </nav>
    
    <div class="d-flex justify-center align-center">
      <div class="text-align-center">
        <LyText font="display-small-200">Enjoy your music with</LyText>
        <div class="text-align-center">
          <LyText font="display-small-600">Musily</LyText>
        </div>
        
        <div class="mt-3 text-align-center">
          <LyText font="label-small-300" :opacity="0.7">
            Simple and free music app with no distractions, no ads. 
            Efficient and easy to use.
          </LyText>
        </div>
        
        <!-- Version info -->
        <div v-if="releaseData.version" class="mt-2 text-align-center">
          <LyText font="label-small-400" :opacity="0.6">
            Latest version: {{ releaseData.version }} ({{ formattedDate }})
          </LyText>
        </div>

        <div class="my-4 width-md-150">
          <LyTabView :active-tab="userPlatform" :tabs="[
            { label: 'Android', slot: 'tab1' },
            { label: 'Windows', slot: 'tab2' },
            { label: 'Linux', slot: 'tab3' }
          ]">
            <!-- Android -->
            <template #tab1-label>
              <FontAwesome :icon="['fab', 'android']" class="ml-2" />
            </template>
            <template #tab1>
              <div class="platform-info mb-3">
                <LyText font="label-medium-400">
                  Take your music anywhere with Musily for Android
                </LyText>
              </div>
              <div v-if="isLoading" class="text-align-center py-2">
                <LyText font="label-small-400">Loading download link...</LyText>
              </div>
              <div v-else-if="hasError" class="text-align-center py-2">
                <LyText font="label-small-400">
                  Couldn't load download link. Try again or use alternative links below.
                </LyText>
                <LyFilledButton class="width-md-45 mt-2" url="https://t.me/MusilyApp">
                  <FontAwesome :icon="['fab', 'telegram']" class="mr-2" /> Get via Telegram
                </LyFilledButton>
              </div>
              <div v-else-if="androidUrl">
                <div class="mb-3">
                  <LyText font="label-small-300">
                    Android version is available. Download it now!
                  </LyText>
                </div>
                <LyFilledButton
                  class="width-md-45" 
                  :url="androidUrl"
                  @click="trackDownload('android')"
                >
                  <FontAwesome :icon="['fab', 'android']" class="mr-2" /> Download APK
                </LyFilledButton>
              </div>
              <div v-else class="text-align-center py-2">
                <div class="mb-3">
                  <LyText font="label-small-300">
                    Android version isn't available yet. Check our Telegram for updates.
                  </LyText>
                </div>
                <LyFilledButton class="width-md-45 mt-2" url="https://t.me/MusilyApp">
                  <FontAwesome :icon="['fab', 'telegram']" class="mr-2" /> Telegram
                </LyFilledButton>
              </div>
            </template>

            <!-- Windows -->
            <template #tab2-label>
              <FontAwesome :icon="['fab', 'windows']" class="ml-2" />
            </template>
            <template #tab2>
              <div class="platform-info mb-3">
                <LyText font="label-medium-400">
                  Desktop music experience with Musily for Windows
                </LyText>
              </div>
              <div v-if="isLoading" class="text-align-center py-2">
                <LyText font="label-small-400">Loading download link...</LyText>
              </div>
              <div v-else-if="hasError" class="text-align-center py-2">
                <LyText font="label-small-400">
                  Couldn't load download link. Try again or use alternative links below.
                </LyText>
                <LyFilledButton class="width-md-45 mt-2" url="https://t.me/MusilyApp">
                  <FontAwesome :icon="['fab', 'telegram']" class="mr-2" /> Telegram
                </LyFilledButton>
              </div>
              <div v-else-if="windowsUrl">
                <div class="mb-3">
                  <LyText font="label-small-300">
                    Windows version is available. Download it now!
                  </LyText>
                </div>
                <LyFilledButton
                  class="width-md-45" 
                  :url="windowsUrl"
                  @click="trackDownload('windows')"
                >
                  <FontAwesome :icon="['fab', 'windows']" class="mr-2" /> Download
                </LyFilledButton>
              </div>
              <div v-else class="text-align-center py-2">
                <div class="mb-3">
                  <LyText font="label-small-300">
                    Windows version isn't available yet. Check our Telegram for updates.
                  </LyText>
                </div>
                <LyFilledButton class="width-md-45 mt-2" url="https://t.me/MusilyApp">
                  <FontAwesome :icon="['fab', 'telegram']" class="mr-2" /> Telegram
                </LyFilledButton>
              </div>
            </template>

            <!-- Linux -->
            <template #tab3-label>
              <FontAwesome :icon="['fab', 'linux']" class="ml-2" />
            </template>
            <template #tab3>
              <div class="platform-info mb-3">
                <LyText font="label-medium-400">
                  Desktop music experience with Musily for Linux
                </LyText>
              </div>
              <div v-if="isLoading" class="text-align-center py-2">
                <LyText font="label-small-300">Loading download link...</LyText>
              </div>
              <div v-else-if="hasError" class="text-align-center py-2">
                <LyText font="label-small-300">
                  Couldn't load download link. Try again or use alternative links below.
                </LyText>
                <LyFilledButton class="width-md-45 mt-2" url="https://t.me/MusilyApp">
                  <FontAwesome :icon="['fab', 'telegram']" class="mr-2" /> Telegram
                </LyFilledButton>
              </div>
              <div v-else-if="linuxUrl">
                <div class="mb-3">
                  <LyText font="label-small-300">
                    Linux version is available. Download it now!
                  </LyText>
                </div>
                <LyFilledButton
                  class="width-md-45" 
                  :url="linuxUrl"
                  @click="trackDownload('linux')"
                >
                  <FontAwesome :icon="['fab', 'linux']" class="mr-2" /> Download
                </LyFilledButton>
              </div>
              <div v-else class="text-align-center py-2">
                <div class="mb-3">
                  <LyText font="label-small-300">
                    Linux version isn't available yet. Check our Telegram for updates.
                  </LyText>
                </div>
                <LyFilledButton class="width-md-45 mt-2" url="https://t.me/MusilyApp">
                  <FontAwesome :icon="['fab', 'telegram']" class="mr-2" /> Telegram
                </LyFilledButton>
              </div>
            </template>
          </LyTabView>
        </div>
        
        <div class="mt-3">
          <LyText font="label-small-300" :opacity="0.6" class="mb-2">
            Follow us for updates:
          </LyText>
          <div>
            <LyIconButton url="https://github.com/MusilyApp" @click="trackDownload('github')">
              <FontAwesome :icon="['fab', 'github']" />
            </LyIconButton>
            <LyIconButton url="https://t.me/MusilyApp" @click="trackDownload('telegram')">
              <FontAwesome :icon="['fab', 'telegram']" />
            </LyIconButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-page {
  height: calc(100vh - 100px);
  overflow-y: auto;
}

.error-text {
  color: #e74c3c;
}

.feature-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.divider {
  height: 1px;
  background-color: rgba(128, 128, 128, 0.2);
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
}

.features-grid {
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.feature-item {
  width: 120px;
  padding: 15px 10px;
  text-align: center;
  border-radius: 8px;
  background-color: rgba(128, 128, 128, 0.1);
  transition: all 0.2s ease;
}

.feature-item:hover {
  background-color: rgba(128, 128, 128, 0.15);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 24px;
  margin-bottom: 8px;
  opacity: 0.8;
}

/* Media queries for responsive design */
@media (max-width: 768px) {
  .download-page {
    height: auto;
    min-height: calc(100vh - 100px);
    padding: 20px 10px;
  }
  
  .features-grid {
    gap: 10px;
  }
  
  .feature-item {
    width: 100px;
    padding: 10px 5px;
  }
}
</style>