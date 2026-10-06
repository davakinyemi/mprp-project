import { createClient } from '@supabase/supabase-js'
import type { H3Event } from 'h3'

// One client per request, carrying that request's Clerk token. Supabase trusts
// Clerk as a third-party provider, so policies can read the token's claims
// (`o.id` for the organization). Passing `accessToken` also switches off
// supabase-js's own auth, so Clerk stays the only thing managing sessions.
export function serverSupabase(event: H3Event) {
  const { supabaseUrl, supabaseKey } = serverEnv()
  return createClient(supabaseUrl, supabaseKey, {
    accessToken: () => event.context.auth().getToken(),
  })
}
