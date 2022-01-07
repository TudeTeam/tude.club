<template>
  <div class="404">
    <div class="background" />
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <nuxt-link to="/">
      Back
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url('/assets/img/404.webp');
  z-index: -1;
}

h1 {
  font-size: 80pt;
  margin-bottom: 0;
}

h2 {
  color: $color-sub;
  margin: 0 0 30pt 0;
}

a {
  display: block;
  text-decoration: none;
  padding: 9pt 24pt;
  width: fit-content;
  border: none;
  border-radius: 99pt;
  background-color: #000000;
  cursor: pointer;
  transition: background-color .1s ease;
  font-family: $font-major;
  color: #ffffff;
  font-size: 10pt;

  &:hover {
    background-color: #222222;
  }
}
</style>
