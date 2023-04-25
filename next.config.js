/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['fakestoreapi.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
