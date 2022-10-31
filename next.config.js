/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  assetPrefix: '/docs',
  rewrites() {
    return [
      { source: '/_next/:path*', destination: '/_next/:path*' }
    ]
  },
  images: {
    unoptimized: true
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  distDir: 'docs',
  basePath: '/docs',
}

module.exports = nextConfig
