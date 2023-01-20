<template >
  <SmaragdApp>
    <NavHeader />
    <SmaragdPage>
      <h1>Error {{ error.statusCode }}</h1>
      <p>{{ error.statusMessage }}</p>
    </SmaragdPage>
  </SmaragdApp>
</template>

<script setup>
const error = useError()
</script>
