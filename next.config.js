/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
  redirects: async () => [
    {
      source: '/contact-2/',
      destination: '/contact/',
      permanent: true, // 301 redirect
    },
  ],
  // Use Webpack instead of Turbopack for compatibility with older glibc versions
  experimental: {
    turbopack: false,
  },
}

module.exports = nextConfig
