<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    url?: string;
  }>(),
  {
    theme: undefined,
    disabled: false,
    loading: false,
    url: undefined,
  },
);

const { openUrl } = useOpenUrl();
const emit = defineEmits(['click']);

function onClick(event: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit('click');
  }
  if (props.url) {
    event.preventDefault();
    openUrl(props.url);
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

<template>
  <a v-if="url" :href="url" class="ly-filled-button" @click="onClick">
    <LyCircularProgress v-if="loading" color="on-primary-color-border-top" />
    <slot v-else />
  </a>
  <button
    v-else
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

<style scoped lang="scss">
@use '@/assets/scss/ui/buttons/LyFilledButton.scss';

a.ly-filled-button {
  text-decoration: none;
}
</style>
