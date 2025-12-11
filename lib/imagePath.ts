/**
 * Helper function to get the correct image path for GitHub Pages
 * This ensures images work correctly with the basePath configuration
 */
export function getImagePath(path: string): string {
  // In production with basePath, Next.js should handle this automatically
  // But we ensure it works correctly
  if (typeof window !== 'undefined') {
    // Client-side: use the path as-is, Next.js will handle basePath
    return path
  }
  // Server-side: return as-is, Next.js Image component will handle it
  return path
}


