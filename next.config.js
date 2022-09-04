/** @type {import('next').NextConfig} */

const securityHeaders = [{
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
}]

const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
