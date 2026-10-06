export interface ServerEnv {
  supabaseUrl: string
  supabaseKey: string
}

let cached: ServerEnv | undefined

// Read once at boot by server/plugins/env.ts. A missing value stops the server
// there rather than surfacing later as a confusing auth or query error. Clerk
// would otherwise fall back to a throwaway keyless app without saying so.
export function serverEnv(): ServerEnv {
  if (cached) return cached

  const problems: string[] = []
  const read = (name: string): string => {
    const value = process.env[name]?.trim() ?? ''
    if (!value) problems.push(`${name} is missing or blank`)
    return value
  }

  read('NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY')
  read('NUXT_CLERK_SECRET_KEY')
  const supabaseUrl = read('SUPABASE_URL')
  const supabaseKey = read('SUPABASE_KEY')

  // A secret key bypasses row-level security, which would make the Clerk token
  // on every request meaningless. Only the publishable key is allowed here.
  if (supabaseKey && !supabaseKey.startsWith('sb_publishable_')) {
    problems.push('SUPABASE_KEY must be the publishable key (sb_publishable_...)')
  }

  if (problems.length) {
    throw new Error(`Environment is not configured:\n  - ${problems.join('\n  - ')}\nSee .env.example.`)
  }

  cached = { supabaseUrl, supabaseKey }
  return cached
}
