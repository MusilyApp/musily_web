import { ref } from 'vue';

interface OpenUrlOptions {
  newTab?: boolean;
}

export const useOpenUrl = () => {
  const isOpening = ref(false);

  function openUrl(url: string, options: OpenUrlOptions = { newTab: true }) {
    if (!url) {
      return;
    }

    isOpening.value = true;

    try {
      if (options.newTab) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = url;
      }
    } finally {
      isOpening.value = false;
    }
  }

  return { openUrl, isOpening };
};
