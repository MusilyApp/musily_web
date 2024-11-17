<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: '/' });

definePageMeta({
  layout: 'default',
});

useTheme();
</script>

<template>
  <div
    style="height: calc(100vh - 100px)"
    class="d-flex flex-col align-center justify-center px-5"
  >
    <MusilyLogo width="150px" height="150px" />
    <LyText font="body-large-600">
      {{ error.message.split(':')[0] }}
    </LyText>
    <p>
      <LyFilledButton @click="handleError"> Home Page </LyFilledButton>
    </p>
  </div>
</template>
