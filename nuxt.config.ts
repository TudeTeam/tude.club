
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@vueuse/nuxt',
    'nuxt-icon',
    'radix-vue/nuxt',
  ],
  
  runtimeConfig: {
    public: {}
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/variables.scss";'
        }
      }
    }
  },
})
