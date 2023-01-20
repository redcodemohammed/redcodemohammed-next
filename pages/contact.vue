<template>
  <section class="container mx-auto dark font-fira-code">
    <div class="p-5">
      <h2 class="text-comment-100 text-4xl lg:text-6xl md:col-span-2 lg:col-span-3 xl:col-span-4 my-10">Do you have an interesting idea? let's make it real!</h2>
    </div>

    <div class="p-5 flex justify-start">
      <form class="grid gap-3 flex-1 max-w-xl">
        <input type="text" placeholder="Your name" class="bg-background text-foreground" />
        <input type="text" placeholder="Your email" class="bg-background text-foreground" />
        <textarea cols="30" rows="10" placeholder="Your fantastic idea" class="bg-background text-foreground"></textarea>
        <div class="flex justify-center col-span-full py-5">
          <button class="w-full px-3 py-2 border shadow-4 hover:bg-background-600 duration-150 transform bg-background-700 text-comment-400 font-bold">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>
