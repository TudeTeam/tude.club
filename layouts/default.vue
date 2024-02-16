<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.layout {
  width: 90vw;
  max-width: 600pt;
  margin: 0 auto;
}
</style>
