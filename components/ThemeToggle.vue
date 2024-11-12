<template>
  <LyFilledButton @click="toggleTheme">Toggle Theme</LyFilledButton>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';

const { toggleTheme } = useTheme();
</script>
