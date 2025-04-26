<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    url?: string;
    size?: string | number;
  }>(),
  {
    disabled: false,
    loading: false,
    url: undefined,
    size: '20px',
  },
)

const emit = defineEmits(['click'])

const { openUrl } = useOpenUrl()

function onClick(event: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
  if (props.url) {
    event.preventDefault()
    openUrl(props.url)
  }
}

const isFocused = ref(false)

function handleFocus() {
  isFocused.value = true
}

function handleBlur() {
  isFocused.value = false
}
</script>

<template>
  <a v-if="url" :href="url" class="ly-icon-button" :style="{ fontSize: typeof size === 'number' ? `${size}px` : size }"
    @click="onClick" @focus="handleFocus" @blur="handleBlur" :aria-disabled="disabled || loading">
    <LyCircularProgress v-if="loading" color="on-primary-color-border-top" />
    <slot v-else />
  </a>

  <button v-else :class="['ly-icon-button', { focused: isFocused }]"
    :style="{ fontSize: typeof size === 'number' ? `${size}px` : size }" :disabled="disabled" @click="onClick"
    @focus="handleFocus" @blur="handleBlur">
    <LyCircularProgress v-if="loading" color="on-primary-color-border-top" />
    <slot v-else />
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables.scss' as *;

.ly-icon-button {
  color: $text-color;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg,
  img {
    width: 24px;
    height: 24px;
    color: $text-color;
  }
}

a.ly-icon-button {
  text-decoration: none;
}
</style>
