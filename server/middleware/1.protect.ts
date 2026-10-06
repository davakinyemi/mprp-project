const PUBLIC_PAGES = ['/sign-in', '/sign-up']

// Signed-out page requests are redirected on the server, so a protected page's
// HTML is never rendered for them.
export default defineEventHandler(async (event) => {
  const isPageRequest = event.method === 'GET'
    && (getRequestHeader(event, 'accept') ?? '').includes('text/html')
  if (!isPageRequest) return

  const { pathname, href } = getRequestURL(event)
  if (PUBLIC_PAGES.some(p => pathname === p || pathname.startsWith(`${p}/`))) return

  if (!event.context.auth().userId) {
    await sendRedirect(event, `/sign-in?redirect_url=${encodeURIComponent(href)}`)
  }
})
