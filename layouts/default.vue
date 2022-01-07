<template>
  <div id="app">
    <PageHeader />
    <div class="app-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async mounted() {
    const { data } = await this.$axios.get('/data/content.json')
    if (typeof data === 'string') data = JSON.parse(data)
    this.$store.commit('setContent', data)
  }
})
</script>

<style lang="scss">
.app-content {
  max-width: $content-width;
  width: 90%;
  margin: $padding*4 auto;
}
</style>
