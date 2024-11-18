/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  /*...(process.env.NODE_ENV === 'production' ? {
    basePath: '/AdiWebsite',
    assetPrefix: '/AdiWebsite/',
    trailingSlash: true,
  } : {}), */
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
}

export default nextConfig
