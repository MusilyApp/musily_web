<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div
    style="height: calc(100vh - 100px)"
    class="d-flex flex-col align-center justify-center px-5"
  >
    <nav class="d-flex justify-center">
      <MusilyLogo width="150px" height="150px" />
    </nav>
    <div class="d-flex justify-center align-center">
      <div class="text-align-center">
        <LyText font="display-small-200"> Enjoy your music with </LyText>
        <div class="text-align-center">
          <LyText font="display-small-600"> A great music app. </LyText>
        </div>
        <div class="mt-2 text-align-center">
          <LyText font="label-small-300" :opacity="0.5">
            Simple and free music app with no distractions, no ads. Esfficient
            and easy to use.
          </LyText>
        </div>
        <div
          class="d-flex justify-center mt-3 flex-col flex-md-row"
          style="gap: 4px"
        >
          <LyFilledButton class="width-md-45" url="https://t.me/MusilyApp">
            Telegram Channel
          </LyFilledButton>
          <LyFilledButton
            class="width-md-45"
            url="https://github.com/MusilyApp"
          >
            Github
          </LyFilledButton>
        </div>
      </div>
    </div>
  </div>
</template>
