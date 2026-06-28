/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mysite',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
