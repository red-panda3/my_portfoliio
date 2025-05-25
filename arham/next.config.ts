/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'], // Allow both standard and premium Unsplash images
  },
};

module.exports = nextConfig;