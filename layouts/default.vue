<template>
  <div id="layout" :data-background="background">
    <div class="noise" :data-background="background">
      <slot name="header">
        <NavHeader />
      </slot>
      <SmaragdPage>
        <slot />
      </SmaragdPage>
    </div>
  </div>
</template>

<script setup>
// const { data } = await useFetch('/data/content.json')
// if (typeof data === 'string') data = JSON.parse(data)
// this.$store.commit('setContent', data)
const backgrounds = {
  index: 'green'
}

const route = useRoute()
const background = computed(() => backgrounds[route.name] ?? '')
</script>

<style lang="scss">
body #smaragd-app {
  background: transparent;
}

body [smaragd-page] {
  padding-top: 0 !important;
}
</style>

<style scoped lang="scss">
#layout, .noise {
  padding: 1px 0;
}

#layout[data-background="green"] {
  background: linear-gradient(180deg, $theme-forrest, $bg-regular);
}

.noise[data-background="green"] {
  background-image: url('~/assets/img/noise-10p.png');
  background-blend-mode: multiply;
}
</style>
