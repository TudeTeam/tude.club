<template>
  <NuxtLink :to="url" :target="url.startsWith('http') ? '_blank' : undefined">
    <Icon :name="icon" />
    <h3 v-text="title" />
    <span v-text="description" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  url: string
}>()
</script>

<style scoped lang="scss">
a {
  background-color: $surfaceContainer;
  border-radius: 5pt;
  padding: 20pt;
  text-decoration: none;
  color: $onSurface;

  &:hover h3 {
    text-decoration: underline;
  }
}

.icon {
  width: 28px;
  height: 28px;
}

h3 {
  font-size: 14pt;
  margin: 10pt 0 10pt 0;
}
</style>
