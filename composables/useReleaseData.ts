import { ref, computed } from 'vue';
import axios from 'axios';

const cacheKey = 'latestReleaseData';
const cacheExpirationKey = 'latestReleaseExpiration';
const cacheDuration = 10 * 60 * 1000; // 10 minutes

export function useReleaseData() {
  const isLoading = ref(true);
  const hasError = ref(false);
  const errorMessage = ref('');
  
  const androidUrl = ref<string | null>(null);
  const windowsUrl = ref<string | null>(null);
  const linuxUrl = ref<string | null>(null);

  const releaseData = ref<{ version: string | null, publishedAt: string | null }>({
    version: null,
    publishedAt: null,
  });

  function extractPlatformUrls(assets: any[]) {
    androidUrl.value = null;
    windowsUrl.value = null;
    linuxUrl.value = null;

    assets.forEach(asset => {
      const name = asset.name.toLowerCase();
      const url = asset.browser_download_url;
      if (name.endsWith('.apk')) {
        androidUrl.value = url;
      } else if (name.includes('win') || name.includes('windows')) {
        windowsUrl.value = url;
      } else if (name.endsWith('.flatpak') || name.includes('linux')) {
        linuxUrl.value = url;
      }
    });
  }

  const formattedDate = computed(() => {
    if (!releaseData.value.publishedAt) return '';
    return new Date(releaseData.value.publishedAt).toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });
  });

  async function getLatestReleaseData() {
    isLoading.value = true;
    hasError.value = false;

    const cachedData = localStorage.getItem(cacheKey);
    const cachedExpiration = localStorage.getItem(cacheExpirationKey);

    if (cachedData && cachedExpiration && Date.now() < Number(cachedExpiration)) {
      const parsed = JSON.parse(cachedData);
      releaseData.value = { version: parsed.version, publishedAt: parsed.publishedAt };
      androidUrl.value = parsed.androidUrl;
      windowsUrl.value = parsed.windowsUrl;
      linuxUrl.value = parsed.linuxUrl;
      isLoading.value = false;
      return;
    }

    try {
      const response = await axios.get('https://api.github.com/repos/MusilyApp/musily/releases/latest');
      const assets = response.data.assets;
      if (assets.length > 0) {
        extractPlatformUrls(assets);

        const newData = {
          version: response.data.tag_name,
          publishedAt: response.data.published_at,
          androidUrl: androidUrl.value,
          windowsUrl: windowsUrl.value,
          linuxUrl: linuxUrl.value,
        };

        releaseData.value = { version: newData.version, publishedAt: newData.publishedAt };

        localStorage.setItem(cacheKey, JSON.stringify(newData));
        localStorage.setItem(cacheExpirationKey, (Date.now() + cacheDuration).toString());
      } else {
        throw new Error('No assets found in the latest release.');
      }
    } catch (error) {
      hasError.value = true;
      errorMessage.value = error instanceof Error ? error.message : 'Failed to fetch latest release';
    } finally {
      isLoading.value = false;
    }
  }

  return {
    releaseData,
    androidUrl,
    windowsUrl,
    linuxUrl,
    isLoading,
    hasError,
    errorMessage,
    formattedDate,
    getLatestReleaseData,
  };
}
