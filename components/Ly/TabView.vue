<template>
  <div class="tab-view" style="max-width: calc(100vw - 20px);">
    <div class="tab-buttons">
      <div class="tab-buttons-inner">
        <button v-for="(tab, index) in tabs" :key="index" :class="{ active: index === activeTab }"
          @click="changeTab(index)">
          {{ tab.label }}
          <slot :name="`${tab.slot}-label`" />
        </button>
        <div class="tab-underline" :style="{
          width: underlineWidth,
          transform: `translateX(${activeTab * 100}%)`
        }" />
      </div>
    </div>

    <div class="tab-slider-wrapper">
      <div class="tab-slider" :style="{
        transform: `translateX(-${activeTab * 100}%)`
      }">
        <div v-for="(tab, index) in tabs" :key="index" class="tab-panel">
          <slot :name="tab.slot"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = withDefaults(defineProps<{
  tabs: { label: string; slot: string }[]
  activeTab: number;
}>(), {
  activeTab: 0,
  tabs: () => [],
});

const activeTab = ref(props.activeTab);
const underlineWidth = computed(() => `${100 / props.tabs.length}%`)

watch(() => props.activeTab, (newValue) => {
  activeTab.value = newValue;
});

function changeTab(index: number) {
  activeTab.value = index
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/TabView.scss';
</style>
