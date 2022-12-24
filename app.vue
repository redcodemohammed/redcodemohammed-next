<template>
  <main
    class="dark"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </main>
</template>
<script lang="ts" setup>
// @ts-ignore
import image from 'assets/image.webp'
</script>
