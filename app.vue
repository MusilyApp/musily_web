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
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageType: 'image/png',
  ogSiteName: 'Musily',
});
</script>

<template>
  <div>
    <Head>
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
    </Head>
    <NuxtLayout>
      <slot />
    </NuxtLayout>
  </div>
</template>
