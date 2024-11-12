<template>
  <div class="perspective">
    <img :src="'/screenshots/player.jpg'" alt="App Screenshot" />
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/variables.scss' as *;
.perspective {
  position: relative;
  width: 328px;
  height: 701px;
  border-radius: 32px;
  transform-style: preserve-3d;
  transition: all 500ms ease-in;
  transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);

  display: inline-block;
}

[theme-data='dark'] {
  .perspective {
    box-shadow: -40px 80px 80px -10px rgba(255, 255, 255, 0.7);
  }
}
[theme-data='light'] {
  .perspective {
    box-shadow: -40px 80px 80px -10px rgba(0, 0, 0, 0.7);
  }
}

.perspective img {
  position: absolute;
  border-radius: 32px;
  top: 0px;
  left: 0px;
  width: 328px;
  height: 701px;
  transform: translateZ(16px);
}
</style>
