<template>
  <article @click="click">
    <div class="image" :style="`background-image: url('${article.image}')`" />
    <h2 v-text="article.title" />
    <div v-if="article.description" class="description" v-text="article.description" />
  </article>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    click() {
      if (/https?:/.test(this.article.url))
        window.open(this.article.url, '_blank').focus()
      else
        this.$router.push(this.article.url)
    }
  }
})
</script>

<style lang="scss" scoped>
article {
  background-color: $bg-dark;
  border-radius: $br;
  padding: $padding/2;
  margin-top: $padding*2;
  transition: background-color .1s ease;
  cursor: pointer;
  // border: 1px solid #bbbbbb;
  // border-bottom-width: 5px;

  &:hover {
    background-color: $bg-darker;
  }

  .image {
    background-position: center;
    background-size: cover;
    aspect-ratio: 16/9;
    grid-area: image;
    border-radius: $br;
    margin-top: -$padding*2;
    // border: 1px solid black;
    // border-bottom-width: 3px;
  }

  h2 {
    grid-area: title;
    font-family: $font-header;
    font-size: 20pt;
    color: $color-header;
    text-transform: uppercase;
    padding: 0;
    margin: $padding;
    line-height: 90%;
  }

  .description {
    grid-area: description;
    font-family: $font-regular;
    font-size: 12pt;
    margin: $padding;
    color: $color-regular;
  }
}
</style>
