<template>
  <div class="page">
    <div
      class="outer"
      :style="{
        '--h': `${size.height.value}px`,
        '--w': `${size.width.value}px`
      }"
      style-noise
    >
      <div class="logo-anim">
        <img ref="image" src="~/assets/img/v2.gif" draggable="false">
      </div>
      <div class="logo-blur">
        <img src="~/assets/img/v2.gif" draggable="false">
      </div>
      <div class="logo-reflection">
        <img src="~/assets/img/v2.gif" draggable="false">
      </div>
    </div>
    <div class="skoober" />
  </div>

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'none'
})

const imageEl = useTemplateRef('image')
const size = useElementSize(imageEl)
</script>

<style scoped lang="scss">
.page {
  background-color: black;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.skoober {
  max-width: 40vw;
  max-height: 40vh;
  width: 100%;
  aspect-ratio: 2;
  outline: 10px solid black;
  border-radius: 10px;
  outline-offset: -6px;
  position: absolute;
}

.outer {
  max-width: 40vw;
  max-height: 40vh;
  aspect-ratio: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 650px;
  animation: joober 2s infinite steps(1);

  @keyframes joober {
    0% { filter: blur(0) brightness(1); }
    10% { filter: blur(2px) brightness(1.1); }
    20% { filter: blur(0) brightness(1.2); }
    30% { filter: blur(3px) brightness(1.1); }
    40% { filter: blur(0) brightness(1); }
    50% { filter: blur(2px) brightness(0.9); }
    60% { filter: blur(0) brightness(0.8); }
    70% { filter: blur(1px) brightness(0.9); }
    80% { filter: blur(0) brightness(1); }
    90% { filter: blur(2px) brightness(1.1); }
    100% { filter: blur(0) brightness(1.2); }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-anim {
  width: 50%;
  height: 50%;
  animation: jitter 2s infinite steps(1);

  @keyframes jitter {
    0% { transform: translate(0, 0); }
    10% { transform: translate(-2px, -2px); }
    20% { transform: translate(1px, 2px); }
    30% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -1px); }
    50% { transform: translate(-1px, 1px); }
    60% { transform: translate(1px, -2px); }
    70% { transform: translate(-2px, 1px); }
    80% { transform: translate(2px, 2px); }
    90% { transform: translate(-1px, -1px); }
    100% { transform: translate(1px, 1px); }
  }
}

.logo-blur {
  position: absolute;
  filter: blur(30px);
  mask-image: radial-gradient(
    ellipse calc(var(--w) / 2) calc(var(--h) / 2),
    transparent 60%,
    black 100%
  );
}

.logo-reflection {
  position: absolute;
  top: 0;
  transform: scaleY(-1) rotateX(-40deg);
  transform-origin: bottom;
  filter: blur(20px);
  transform-style: preserve-3d;
  mask-image: radial-gradient(
    ellipse at 50% 100%,
    black 0%,
    transparent 70%
  );
}
</style>
