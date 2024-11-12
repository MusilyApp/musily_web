<script setup lang="ts">
import type { Color } from '~/types/styles';
import type { TextOverflow, Typograph } from '~/types/typography';

withDefaults(
  defineProps<{
    font?: Typograph;
    color?:
      | Color
      | {
          custom: string;
        };
    overflow?: TextOverflow;
    opacity?: number;
  }>(),
  {
    color: () => {
      return 'text-color-text';
    },
    font: 'label-medium',
    overflow: undefined,
    opacity: 1,
  },
);
</script>

<template>
  <span :class="[font, color]" :style="{ opacity }">
    <div
      v-if="overflow"
      :class="{ 'text-overflow-ellipsis': overflow === 'ellipsis' }"
    >
      <slot />
    </div>
    <slot v-else />
  </span>
</template>
