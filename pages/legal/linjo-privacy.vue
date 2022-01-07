<template>
  <div class="page markdown-document">
    <div v-html="content" />
  </div>
</template>

<script>
import Vue from 'vue'
import Document from '@/resources/docs/linjo-privacy.md'

export default Vue.extend({
  computed: {
    content() {
      return Document
    }
  }
})
</script>
