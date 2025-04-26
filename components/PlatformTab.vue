<script setup lang="ts">
defineProps({
  platform: String,
  url: String,
  isLoading: Boolean,
  error: Boolean,
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">
    <LyText>Couldn't load download link. Try again or check updates.</LyText>
  </div>
  <div v-else-if="url">
    <LyFilledButton :url="url">Download {{ platform }}</LyFilledButton>
  </div>
  <div v-else>
    <LyText>{{ platform }} version isn't available yet.</LyText>
  </div>
</template>
