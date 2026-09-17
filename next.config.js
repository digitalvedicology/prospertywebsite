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
  // Allow Turbopack to use WASM bindings for older glibc systems
  turbopack: {},
}

module.exports = nextConfig
