/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/register',
        destination: '/auth/register',
      },
      {
        source: '/session',
        destination: '/session/index',
      },
      {
        source: '/overview',
        destination: '/session/overview',
      },

    ]
  },
}

module.exports = nextConfig
