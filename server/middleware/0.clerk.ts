import { clerkMiddleware } from '@clerk/nuxt/server'

// The module's own middleware is switched off (skipServerMiddleware) because
// Nitro runs it after everything in this folder. Registering it here, first,
// means 1.protect.ts can read the session.
export default clerkMiddleware()
