/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental flag as it's now stable in Next.js 14
  output: 'standalone',
  poweredByHeader: false,
}

module.exports = nextConfig
