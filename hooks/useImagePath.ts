'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to get the correct image path for both development and production (GitHub Pages)
 * This ensures the path is determined after the component mounts and window is available
 */
export function useImagePath(path: string): string {
  const [correctedPath, setCorrectedPath] = useState(path)

  useEffect(() => {
    if (!path) {
      setCorrectedPath(path)
      return
    }

    // Skip if path already has basePath
    if (path.startsWith('/FIGMAFRANCO1')) {
      setCorrectedPath(path)
      return
    }

    // Check if we're in production (GitHub Pages)
    if (typeof window !== 'undefined') {
      try {
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
          setCorrectedPath(`/FIGMAFRANCO1${path}`)
        } else {
          setCorrectedPath(path)
        }
      } catch (error) {
        // If there's any error, fall back to original path
        console.warn('Error detecting GitHub Pages environment:', error)
        setCorrectedPath(path)
      }
    } else {
      setCorrectedPath(path)
    }
  }, [path])

  return correctedPath
}

