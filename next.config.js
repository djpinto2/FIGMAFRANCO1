/** @type {import('next').NextConfig} */
const repoName = 'FIGMAFRANCO1'
// Only use basePath in production (for GitHub Pages)
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? `/${repoName}` : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
}

module.exports = nextConfig
