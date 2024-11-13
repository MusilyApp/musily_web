<script setup lang="ts">
useTheme();
useSeoMeta({
  title: 'Musily: A great music app.',
  ogTitle: 'Musily: A great music app.',
  description: 'Enjoy your music with a great music app.',
  ogDescription: 'Enjoy your music with a great music app.',
  ogUrl: 'https://musily.app/',
  ogType: 'website',
  ogLocale: 'en_US',
  ogImage: '/icons/og_img.png',
  ogImageWidth: '1024',
  ogImageHeight: '1024',
  ogImageType: 'image/png',
  ogSiteName: 'Musily',
});
</script>

<template>
  <div>
    <NuxtLayout>
      <slot />
    </NuxtLayout>
  </div>
</template>
