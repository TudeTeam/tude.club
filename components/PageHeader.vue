<template>
  <header>
    <div id="logo" @click="$router.push('/')">
      <img src="~/assets/img/logo_black.svg" alt="">
    </div>
    <nav>
      <nuxt-link
        v-for="(link, i) of nav"
        :key="i"
        :to="link.href"
        v-text="link.name"
      />
    </nav>
    <div id="user">
      <button @click="login" v-text="'Login'" />
    </div>
  </header>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      nav: [
        { name: 'About us', href: '/about' },
        { name: 'Legal', href: '/legal' }
      ]
    }
  },
  methods: {
    login() {}
  }
})
</script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  max-width: $content-width;
  width: 90%;
  margin: $padding*2 auto;
  gap: $content-height;
}

#logo {
  height: $content-height;
  cursor: pointer;

  img { height: 100%; }
}

nav {
  display: flex;
  align-items: center;

  a {
    color: $color-regular;
    text-decoration: none;
    font-family: $font-regular;
    font-size: 12pt;
    padding: 0.5em 1em;
    position: relative;
    transition: color .1s ease;

    &:hover {
      color: $color-header;
    }
  }
}

#user {
  display: flex;
  justify-content: flex-end;

  button {
    padding: 2pt 24pt;
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
  }
}
</style>
