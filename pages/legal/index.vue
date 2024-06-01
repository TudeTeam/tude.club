<template>
  <h1>Tude Legal</h1>

  <h2>Account</h2>
  <ul>
    <li><NuxtLink to="/legal/account-privacy">Privacy Policy</NuxtLink></li>
    <li><NuxtLink to="/legal/account-terms">Terms of Service</NuxtLink></li>
  </ul>

  <h2>Linjo</h2>
  <ul>
    <li><NuxtLink to="/legal/linjo-privacy">Privacy Policy</NuxtLink></li>
  </ul>

  <h2>FreeStuff</h2>
  <ul>
    <li><NuxtLink to="https://freestuffbot.xyz/privacy/">Privacy Policy</NuxtLink></li>
    <li><NuxtLink to="https://freestuffbot.xyz/terms/">Terms of Service</NuxtLink></li>
    <li><NuxtLink to="https://freestuffbot.xyz/licenses/">Licenses</NuxtLink></li>
  </ul>
</template>

<style scoped lang="scss">
a {
  color: $onSurface;
  text-decoration-style: dotted;
}

ul {
  margin: 0;
  padding: 0 0 0 20pt;
}
</style>
