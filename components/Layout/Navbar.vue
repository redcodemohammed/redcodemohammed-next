<style scoped>
.router-link-exact-active {
  @apply border-b-2 border-comment-600 font-bold;
}
</style>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <header class="container mx-auto flex items-center justify-between my-5 px-3 bg-background-700 text-comment-400 top-0 z-50 shadow-4">
    <div class="" id="logo">
      <img src="@/assets/logo.svg" alt="logo" />
    </div>

    <nav class="">
      <ul class="flex items-center justify-center gap-4">
        <li>
          <NuxtLink class="py-1" to="/">
            <span>Home</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="py-1" to="/work">
            <span>My Work</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="py-1" to="/contact">
            <span>Contact Me</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="py-1" to="/blog">
            <span>My Blog</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
