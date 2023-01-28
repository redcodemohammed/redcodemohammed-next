// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/tailwind.css', 'assets/fonts.css', 'assets/components.css'],
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.js'
  },
  runtimeConfig: {
    public: {
      FORMS_API_KEY: process.env.FORMS_API_KEY,
      FORM_ID: process.env.FORM_ID
    }
  }
})
