/**
 * Get the correct image path for both development and production (GitHub Pages)
 */
export function getImagePath(path: string): string {
  if (!path) return path
  
  // Skip if path already has basePath
  if (path.startsWith('/FIGMAFRANCO1')) {
    return path
  }
  
  // Check if we're in production (GitHub Pages) - client-side only
  if (typeof window !== 'undefined') {
    try {
      // Check multiple ways to detect GitHub Pages
      const pathname = window.location.pathname
      const hostname = window.location.hostname
      const href = window.location.href
      
      // More comprehensive detection
      const isGitHubPages = 
        pathname.startsWith('/FIGMAFRANCO1') || 
        pathname.includes('/FIGMAFRANCO1') ||
        hostname.includes('github.io') ||
        hostname === 'djpinto2.github.io' ||
        href.includes('github.io/FIGMAFRANCO1')
      
      if (isGitHubPages && path.startsWith('/')) {
        const correctedPath = `/FIGMAFRANCO1${path}`
        return correctedPath
      }
    } catch (error) {
      // If there's any error accessing window, fall back to original path
      console.warn('Error detecting GitHub Pages environment:', error)
    }
  }
  
  // Development or server-side: return path as-is
  // The fix-image-paths script will handle static HTML
  return path
}

