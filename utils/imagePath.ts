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
    // Check multiple ways to detect GitHub Pages
    const pathname = window.location.pathname
    const hostname = window.location.hostname
    
    const isGitHubPages = 
      pathname.startsWith('/FIGMAFRANCO1') || 
      hostname.includes('github.io') ||
      hostname === 'djpinto2.github.io'
    
    if (isGitHubPages && path.startsWith('/')) {
      return `/FIGMAFRANCO1${path}`
    }
  }
  
  // Development or server-side: return path as-is
  // The fix-image-paths script will handle static HTML
  return path
}

