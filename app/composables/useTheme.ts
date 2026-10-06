export const THEME_CHOICES = ['system', 'light', 'dark'] as const
export type ThemeChoice = typeof THEME_CHOICES[number]

// A cookie rather than localStorage so the server can write <html data-theme>
// on first paint and a forced theme never flashes the system one.
export function useTheme() {
  return useCookie<ThemeChoice>('theme', {
    default: () => 'system',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
}
