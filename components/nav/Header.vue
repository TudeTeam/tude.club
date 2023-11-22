<template>
  <header>
    <div id="logo" @click="router.push('/')">
      <img v-if="useLightTheme" src="~/assets/img/logo_white.svg" alt="">
      <img v-else src="~/assets/img/logo_black.svg" alt="">
    </div>
    <nav>
      <NuxtLink
        v-for="(link, i) of nav"
        :key="i"
        :to="link.href"
        :data-light="useLightTheme"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
    <div id="user">
      <NuxtLink
        :data-light="useLightTheme"
        to="https://account.tude.club/login"
        v-text="'Login'"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
const nav = [
  { name: 'About us', href: '/about' },
  { name: 'Legal', href: '/legal' }
]

const router = useRouter()

const lightThemePages = [ 'index' ]
const useLightTheme = computed(() => lightThemePages.includes(router.currentRoute.value.name as string))
</script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  max-width: $spacing-page-width;
  width: 90%;
  margin: $spacing-loose auto;
  gap: $spacing-content-height;
}

#logo {
  height: $spacing-content-height;
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

    &[data-light=true] {
      color: #ffffff;
    }
  }
}

#user {
  display: flex;
  justify-content: flex-end;

  button, a {
    padding: 0 24pt;
    border: none;
    border-radius: 99pt;
    background-color: $bg-dark;
    cursor: pointer;
    transition: background-color .1s ease;
    font-family: $font-major;
    color: $color-major;
    font-size: 10pt;
    text-decoration: none;
    line-height: $spacing-content-height;

    &:hover {
      background-color: $bg-darker;
    }

    &[data-light=true] {
      background-color: #00000033;
      color: #ffffff;

      &:hover {
        background-color: #00000055;
      }
    }
  }
}
</style>