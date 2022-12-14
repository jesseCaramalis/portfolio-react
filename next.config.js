/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgur.com',
        port: '',
        pathname: '/a/wris2Yx',
      },
    ],
  },
}

module.exports = nextConfig
