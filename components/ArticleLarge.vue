<template>
  <article>
    <div v-if="!!article" class="loaded">
      <div class="image" :style="`background-image: url('${article.image}')`" />
      <h2 v-text="article.title" />
      <div class="description" v-text="article.description" />
      <div class="buttons">
        <a primary :href="article.url" target="_blank">Visit</a>
        <nuxt-link :to="`/blog/${article.blog}`">
          Read More
        </nuxt-link>
      </div>
    </div>
    <div v-else class="ghost">
      <div class="image ghost" />
      <div class="h2 ghost" />
      <div class="description ghost" />
    </div>
  </article>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    article: {
      type: Object,
      default: null
    }
  }
})
</script>

<style lang="scss" scoped>
article {
  position: relative;
  display: block;

  & > div {
    position: relative;
    display: grid;
    width: 100%;
    height: fit-content;
    grid-template: auto auto auto 1fr / 1fr 1fr;
    grid-template-areas: "image title" "image description" "image buttons" "image 0";
    column-gap: $padding*2;
    row-gap: $padding;

    &.ghost {
      pointer-events: none;
      animation: ghost 1s ease infinite alternate;
    }

    @keyframes ghost {
      0% { opacity: .7; }
      100% { opacity: 1; }
    }
  }

  .image {
    background-position: center;
    background-size: cover;
    aspect-ratio: 16/9;
    grid-area: image;
    border-radius: $br;
    background-color: $bg-dark;
  }

  h2, .h2 {
    grid-area: title;
    font-family: $font-header;
    font-size: 40pt;
    color: $color-header;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    line-height: 90%;

    &.ghost {
      width: 80%;
      height: 30pt;
      background: $bg-dark;
      border-radius: 3pt;
      position: relative;
      margin: 0 0 45pt 0;

      &::after {
        width: 40%;
        height: 30pt;
        background: $bg-dark;
        border-radius: 3pt;
        content: '';
        position: absolute;
        bottom: -130%;
        left: 0;
      }
    }
  }

  .description {
    grid-area: description;
    font-family: $font-regular;
    font-size: 12pt;
    color: $color-regular;

    &.ghost {
      width: 70%;
      height: 14pt;
      background: $bg-dark;
      border-radius: 3pt;
      position: relative;
      margin: 0 0 45pt 0;

      &::after {
        width: 90%;
        height: 14pt;
        background: $bg-dark;
        border-radius: 3pt;
        content: '';
        position: absolute;
        bottom: -130%;
        left: 0;
      }

      &::before {
        width: 40%;
        height: 14pt;
        background: $bg-dark;
        border-radius: 3pt;
        content: '';
        position: absolute;
        bottom: -260%;
        left: 0;
      }
    }
  }

  .buttons {
    grid-area: buttons;
    display: flex;
    gap: $padding/2;

    a {
      display: block;
      text-decoration: none;
      padding: 9pt 24pt;
      border: none;
      border-radius: 99pt;
      background-color: $bg-dark;
      cursor: pointer;
      transition: background-color .1s ease;
      font-family: $font-major;
      color: $color-major;
      font-size: 10pt;

      &:hover {
        background-color: $bg-darker;
      }

      &[primary] {
        background-color: $brand-dark;
        color: #ffffff;

        &:hover {
          background-color: darken($brand-dark, 10)
        }
      }
    }
  }
}
</style>
