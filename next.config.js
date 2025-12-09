/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/FIGMAFRANCO1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/FIGMAFRANCO1' : '',
}

module.exports = nextConfig

