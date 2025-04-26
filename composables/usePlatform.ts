import { ref } from 'vue';

export function usePlatform() {
  const userPlatform = ref(0);

  function detectPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('windows') || userAgent.includes('win64') || userAgent.includes('win32')) {
      return 1;
    } else if (userAgent.includes('linux') && !userAgent.includes('android')) {
      return 2;
    } else if (userAgent.includes('android')) {
      return 0;
    }
    return 0;
  }

  userPlatform.value = detectPlatform();

  return {
    userPlatform,
  };
}
