<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'default',
});

// Cache keys and expiration duration
const cacheKey = 'latestReleaseUrl';
const cacheExpirationKey = 'latestReleaseExpiration';
const cacheDuration = 10 * 60 * 1000; // 10 minutes in milliseconds

/**
 * Fetches the latest release URL from the GitHub API.
 * Uses caching to reduce unnecessary API requests.
 */
async function getLatestReleaseUrl(): Promise<string | null> {
  // Check localStorage for cached data
  const cachedUrl = localStorage.getItem(cacheKey);
  const cachedExpiration = localStorage.getItem(cacheExpirationKey);

  if (cachedUrl && cachedExpiration && Date.now() < Number(cachedExpiration)) {
    return cachedUrl;
  }

  // If no valid cache, fetch from GitHub API
  try {
    const response = await axios.get(
      'https://api.github.com/repos/MusilyApp/musily/releases/latest',
    );
    const assets = response.data.assets;
    if (assets && assets.length > 0) {
      const url = assets[0].browser_download_url;

      // Save new data to localStorage with expiration
      localStorage.setItem(cacheKey, url);
      localStorage.setItem(
        cacheExpirationKey,
        (Date.now() + cacheDuration).toString(),
      );

      return url;
    } else {
      throw new Error('No assets found in the latest release.');
    }
  } catch (error) {
    return null;
  }
}

const downloadUrl = ref<string | null>(null);

onMounted(async () => {
  downloadUrl.value = await getLatestReleaseUrl();
});
</script>

<template>
  <div
    style="height: calc(100vh - 100px)"
    class="d-flex flex-col align-center justify-center px-5"
  >
    <nav class="d-flex justify-center">
      <MusilyLogo width="150px" height="150px" />
    </nav>
    <div class="d-flex justify-center align-center">
      <div class="text-align-center">
        <LyText font="display-small-200"> Enjoy your music with </LyText>
        <div class="text-align-center">
          <LyText font="display-small-600"> A great music app. </LyText>
        </div>
        <div class="mt-2 text-align-center">
          <LyText font="label-small-300" :opacity="0.5">
            Simple and free music app with no distractions, no ads. Efficient
            and easy to use.
          </LyText>
        </div>
        <div
          class="d-flex justify-center mt-3 flex-col flex-md-row"
          style="gap: 4px"
        >
          <LyFilledButton class="width-md-45" url="https://t.me/MusilyApp">
            Telegram Channel
          </LyFilledButton>
          <LyFilledButton
            v-if="downloadUrl"
            class="width-md-45"
            :url="downloadUrl"
          >
            Download
          </LyFilledButton>
        </div>
      </div>
    </div>
  </div>
</template>
