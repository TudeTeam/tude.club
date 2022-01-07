<template>
  <div class="page">
    <section name="featured-article">
      <ArticleLarge :article="content.featured" />
    </section>
    <section name="more-articles">
      <ArticleSmall
        v-for="(item, i) of content.list"
        :key="i"
        :article="item"
      />
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    content() {
      return this.$store.state.content
    }
  }
})
</script>

<style lang="scss" scoped>
section {
  padding-bottom: $padding*2;
}

section[name="more-articles"] {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: $padding;
}
</style>
