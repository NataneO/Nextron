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
        source: '/customers',
        destination: '/session/customers',
      },
      {
        source: '/reports',
        destination: '/session/reports',
      },
      {
        source: '/leaderboard',
        destination: '/session/leaderboard',
      },
      {
        source: '/tags',
        destination: '/session/tags',
      }

    ]
  },
}

module.exports = nextConfig
