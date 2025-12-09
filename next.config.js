/** @type {import('next').NextConfig} */
const repoName = 'FIGMAFRANCO1'
// Always use basePath for GitHub Pages
const basePath = `/${repoName}`

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

