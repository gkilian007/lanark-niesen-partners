/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images4.imagebam.com', 'picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images4.imagebam.com',
        pathname: '/**',
      }
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig 