<template>
  <button
    :class="['ly-filled-button', `theme-${theme ?? themeMode}`]"
    :disabled="disabled"
    @click="onClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <span v-if="loading" class="loader" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const { themeMode } = useTheme();

const props = withDefaults(
  defineProps<{
    theme?: 'dark' | 'light';
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

.loader {
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
