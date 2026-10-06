// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@clerk/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  clerk: {
    // Registered by hand in server/middleware/0.clerk.ts so it runs before the
    // redirect for protected pages.
    skipServerMiddleware: true,
    signInUrl: '/sign-in',
    signUpUrl: '/sign-up',
    // Every sign-in and sign-up method ends here. Adding or removing a method
    // in the Clerk dashboard needs no change in this file.
    signInFallbackRedirectUrl: '/',
    signUpFallbackRedirectUrl: '/',
    afterSignOutUrl: '/sign-in',
    // Clerk's components read the same tokens as the rest of the app, so they
    // follow the theme without a second palette.
    appearance: {
      variables: {
        colorPrimary: 'var(--accent)',
        colorBackground: 'var(--surface)',
        colorForeground: 'var(--text)',
        colorMutedForeground: 'var(--text-muted)',
        colorInput: 'var(--surface-sunken)',
        colorInputForeground: 'var(--text)',
        colorBorder: 'var(--border)',
        fontFamily: 'var(--sans)',
        fontSize: '13px',
        borderRadius: '4px',
      },
    },
  },
  nitro: {
    // Inlines the nuxt/dist folder to bypass Windows backslash path bugs
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/]
    },
  },
})
