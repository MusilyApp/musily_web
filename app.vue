<script setup lang="ts">
useTheme();
useSeoMeta({
  title: 'Musily: A great music app.',
  description: 'Enjoy your music with a great music app.',
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
