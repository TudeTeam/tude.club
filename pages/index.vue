<template>
  <LogoAnimation />
  <h1>Tude is a team of professionals doing professional things, professionally.</h1>

  <h2>Our products</h2>
  <div class="cards">
    <LinkCard
      icon="IconFreeStuff"
      title="FreeStuff"
      description="Helps you never miss out on any of the free games floating around the internet."
      url="https://freestuffbot.xyz/"
    />
    <LinkCard
      icon="IconLinjo"
      title="Linjo"
      description="A high pace arcade game for on the go."
      url="https://play.google.com/store/apps/details?id=de.tude.lines"
    />
    <LinkCard
      icon="IconEvents"
      title="Tude Events"
      description="Experience unique, creative, and collaborative experiences hosted by Tude."
      url="https://discord.com/invite/mJnQXet"
    />
  </div>

  <h2>More</h2>
  <div class="cards">
    <LinkCard
      icon="IconDiscord"
      title="Join the club"
      description="We have a Discord server. Wohooo."
      url="https://discord.com/invite/mJnQXet"
    />
    <LinkCard
      icon="IconTude"
      title="About us"
      description="Taking professionalism to a professional level."
      url="./about"
    />
  </div>

  <footer />
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
h1 {
  text-wrap: balance;
  font-size: 28pt;
  font-weight: 700;
  background-color: $surfaceContainer;
  padding: 18pt 26pt;
  border-radius: 15pt;
  display: inline-block;
  width: 80%;
  margin: -40pt 0 0 -36pt;
  z-index: 2;
  position: relative;
  border: 10pt solid $surface;
}

h2 {
  font-size: 20pt;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10pt;
}

footer {
  height: 100pt;
}
</style>
