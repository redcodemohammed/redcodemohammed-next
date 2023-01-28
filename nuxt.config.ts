// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/tailwind.css', 'assets/fonts.css', 'assets/components.css'],
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.js'
  },
  runtimeConfig: {
    public: {
      BOT_TOKEN: process.env.BOT_TOKEN,
      CHAT_ID: process.env.CHAT_ID
    }
  }
})
