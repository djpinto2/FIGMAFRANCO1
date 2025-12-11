/**
 * Get the correct image path for both development and production (GitHub Pages)
 */
export function getImagePath(path: string): string {
  // In production (GitHub Pages), we need to add the basePath
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.pathname.startsWith('/FIGMAFRANCO1')
    if (isGitHubPages && path.startsWith('/')) {
      return `/FIGMAFRANCO1${path}`
    }
  }
  // Development or if path already has basePath
  return path
}

