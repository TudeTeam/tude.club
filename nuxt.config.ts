
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: true,

  modules: [
    '@vueuse/nuxt',
    'nuxt-icon',
    'radix-vue/nuxt',
  ],

  app: {
    head: {
      title: 'Tude',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  
  runtimeConfig: {
    public: {}
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/variables.scss" as *;'
        }
      }
    }
  },
})
