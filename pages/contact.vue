<template>
  <section class="container mx-auto dark font-fira-code">
    <div class="border-2 border-t-0 p-5 bg-cyan-50">
      <h2 class="text-center text-2xl lg:text-4xl md:col-span-2 lg:col-span-3 xl:col-span-4">
        Do you have an interesting idea? let's make it real!
      </h2>
    </div>

    <div class="border-2 border-t-0 p-5 bg-yellow-50 flex justify-center py-28 xl:py-32">
      <form class="grid gap-3 flex-1 max-w-xl">
        <input type="text" placeholder="Your name" class="bg-background text-foreground" />
        <input type="text" placeholder="Your email" class="bg-background text-foreground" />
        <textarea
          cols="30"
          rows="10"
          placeholder="Your fantastic idea"
          class="bg-background text-foreground"></textarea>
        <div class="flex justify-center col-span-full py-5">
          <button class="bg-green hover:bg-green-300 active:bg-green-600 btn-lg">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>
