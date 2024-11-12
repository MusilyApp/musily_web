<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div style="height: calc(100vh - 420px)" class="d-flex align-center pa-12">
    <div class="d-flex justify-center align-center" style="width: 100vw">
      <div class="text-align-center text-align-md-left">
        <LyText font="display-small-200"> Enjoy your music with </LyText>
        <div class="text-align-center text-align-md-left">
          <LyText font="display-small-600"> A great music app. </LyText>
        </div>
        <div class="mt-2 text-align-center text-align-md-left">
          <LyText font="label-small-300" :opacity="0.5">
            Simple and free music app with no distractions, no ads. Esfficient
            and easy to use.
          </LyText>
        </div>
        <div
          class="d-flex justify-start mt-3 flex-col flex-md-row"
          style="gap: 4px"
        >
          <LyFilledButton>Download</LyFilledButton>
          <LyFilledButton>Download via Telegram</LyFilledButton>
        </div>
      </div>
      <div class="d-none d-lg-inline-block">
        <AppScreenshot class="ml-12" />
      </div>
    </div>
  </div>
</template>
