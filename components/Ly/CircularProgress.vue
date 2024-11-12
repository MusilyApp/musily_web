<script setup lang="ts">
import type { Color } from '~/types/styles';

withDefaults(
  defineProps<{
    color?: Color;
  }>(),
  {
    color: 'primary-color-border-top',
  },
);
</script>

<template>
  <span :class="['loader', color]" />
</template>

<style lang="scss">
@use '@/assets/scss/ui/CircularProgress.scss';
</style>
