<template>
  <article>
    <div class="inner">
      <div class="image">
        <img :src="img" alt="">
      </div>
      <div class="fade" />
      <Layout name="flow" class="content">
        <h2 :data-half="half" v-text="title" />
        <p :data-half="half" v-text="content" />
        <Layout name="inline" spacing="tight">
          <Button :text="button1Text" color="forrest" :href="button1Url" />
          <Button v-if="button2Text" :text="button2Text" color="secondary" :href="button2Url" />
        </Layout>
      </Layout>
    </div>
  </article>
</template>

<script setup>
const {
  img,
  title,
  content,
  half,
  button1Text,
  button1Url,
  button2Text,
  button2Url
} = defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  half: { type: Boolean, default: false },
  button1Text: { type: String, required: true },
  button1Url: { type: String, required: true },
  button2Text: { type: String, required: false },
  button2Url: { type: String, required: false },
})
</script>

<style lang="scss">
article {
  background-color: $bg-regular;
  border-radius: $br-regular;
  box-shadow: 0 5pt $spacing-regular $theme-forrest40;
  overflow: hidden;
  position: relative;
  z-index: 2;

  .image {
    background-color: $theme-forrest;
    height: 160pt;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    filter: grayscale(1) contrast(.5) brightness(1.5);
    mix-blend-mode: screen;
    user-select: none;
  }

  .fade {
    margin-top: -70pt;
    height: 70pt;
    background: linear-gradient(180deg, #ffffff00, #ffffff);
  }

  .content {
    padding: $spacing-loose;
    margin-top: calc($spacing-loose * -2);
    position: relative;
    z-index: 3;

    h2 {
      font-size: 32pt;
      font-family: $font-header;
      color: $color-header;
    }

    p[data-half=true], h2[data-half=true] {
      width: 50%;
    }
  }
}
</style>
