/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/docs',
  rewrites() {
    return [
      { source: '/docs/_next/:path*', destination: '/_next/:path*' }
    ]
  },
  images: {
    unoptimized: true
  }

}

module.exports = nextConfig
