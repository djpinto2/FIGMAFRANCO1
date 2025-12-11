/**
 * Get the correct image path for both development and production (GitHub Pages)
 */
export function getImagePath(path: string): string {
  // Always return the path as-is for now, let Next.js handle it
  // The fix-image-paths script will handle the basePath in production
  return path
}

