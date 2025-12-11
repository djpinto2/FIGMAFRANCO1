/**
 * Get the correct image path for both development and production (GitHub Pages)
 */
export function getImagePath(path: string): string {
  // Check if we're in production (GitHub Pages)
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages by looking at the current path
    const isGitHubPages = window.location.pathname.startsWith('/FIGMAFRANCO1')
    if (isGitHubPages && path.startsWith('/') && !path.startsWith('/FIGMAFRANCO1')) {
      return `/FIGMAFRANCO1${path}`
    }
  }
  // Development or if path already has basePath
  return path
}

