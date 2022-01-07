<template>
  <div class="page">
    <h1>Tude Legal</h1>

    <div
      v-for="(doc, i) of documents"
      :key="i"
      class="document"
    >
      <h2 v-text="doc.name" />
      <ul>
        <li
          v-for="(item, j) of doc.items"
          :key="i+'-'+j"
        >
          <nuxt-link :to="item.href" v-text="item.name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      documents: [
        {
          name: 'Linjo',
          items: [
            { name: 'Privacy Policy', href: '/legal/linjo-privacy' }
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li a {
  color: $color-hyperlink;
  text-decoration: none;
  font-family: $font-regular;
  font-size: 14pt;
  margin-left: 0;

  &:hover {
    text-decoration: underline;
  }
}
</style>
