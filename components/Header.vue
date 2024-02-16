<template>
  <header>
    <div class="logo" @click="router.push('/')">
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
    <!-- <div class="user">
      <NuxtLink
        :data-light="useLightTheme"
        to="https://account.tude.club/login"
        v-text="'Login'"
      />
    </div> -->
  </header>
</template>

<script setup lang="ts">
const nav = [
  { name: 'About us', href: '/about' },
  { name: 'Legal', href: '/legal' }
]

const router = useRouter()

const lightThemePages = [ '' ]
const useLightTheme = computed(() => lightThemePages.includes(router.currentRoute.value.name as string))
</script>

<style scoped lang="scss">
header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20pt;
  padding: 30pt 0;
}

.logo {
  height: 30pt;
  cursor: pointer;

  img { height: 100%; }
}

nav {
  display: flex;
  align-items: center;

  a {
    color: $onSurface;
    text-decoration: none;
    font-size: 12pt;
    padding: 0.5em 1em;
    position: relative;
    transition: color .1s ease;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }

    &[data-light=true] {
      color: #ffffff;
    }
  }
}
</style>