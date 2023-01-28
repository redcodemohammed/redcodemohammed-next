<template>
  <main class="dark:bg-background select-none">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </main>
</template>
<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: 'dark'
  }
})
</script>
