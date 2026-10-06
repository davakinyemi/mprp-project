// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@clerk/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    // Inlines the nuxt/dist folder to bypass Windows backslash path bugs
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/]
    },
  },
})
