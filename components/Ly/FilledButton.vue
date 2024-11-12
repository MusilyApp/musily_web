<template>
  <button
    :class="['ly-filled-button']"
    :disabled="disabled"
    @click="onClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <LyCircularProgress v-if="loading" color="on-primary-color-border-top" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
  }>(),
  {
    theme: undefined,
    disabled: false,
    loading: false,
  },
);

const emit = defineEmits(['click']);

function onClick() {
  if (!props.disabled && !props.loading) {
    emit('click');
  }
}

const isFocused = ref(false);

function handleFocus() {
  isFocused.value = true;
}

function handleBlur() {
  isFocused.value = false;
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/ui/buttons/LyFilledButton.scss';
</style>
