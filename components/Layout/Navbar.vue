<style scoped>
.router-link-exact-active {
  @apply border-b-2 border-orange font-bold;
}
</style>

<template>
  <header
    class="container mx-auto flex items-center justify-between border-2 px-3 bg-yellow-50 sticky top-0 z-50">
    <div class="" id="logo">
      <img src="@/assets/logo.svg" alt="logo" />
    </div>

    <nav class="">
      <ul class="flex items-center justify-center gap-4">
        <li>
          <NuxtLink class="py-1" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="py-1" to="/work">My Work</NuxtLink>
        </li>
        <li>
          <NuxtLink class="py-1" to="/contact">Contact Me</NuxtLink>
        </li>
        <li>
          <NuxtLink class="py-1" to="/blog">My Blog</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
