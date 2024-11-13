<script setup lang="ts">
useTheme();
useSeoMeta({
  title: 'Musily: A great music app.',
  description: 'Enjoy your music with a great music app.',
});
</script>

<template>
  <div>
    <NuxtLayout>
      <slot />
    </NuxtLayout>
  </div>
</template>
