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
  twitterCard: 'summary_large_image',
  twitterTitle: 'Musily: Enjoy your music with a great music app.',
  twitterDescription: 'Enjoy your music with a great music app.',
  twitterImage: '/icons/og_img.png',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
});
</script>

<template>
  <div>

    <Head>
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="stylesheet" href="https://static.fontawesome.com/css/fontawesome-app.css" />
    </Head>
    <NuxtLayout>
      <slot />
    </NuxtLayout>
  </div>
</template>
