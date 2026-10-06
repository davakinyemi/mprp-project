// Custom claims added to the session token in the Clerk instance config.
// `org_name` lets the app show the organization without asking Clerk for it.
declare global {
  interface CustomJwtSessionClaims {
    org_name?: string
  }
}

export {}
