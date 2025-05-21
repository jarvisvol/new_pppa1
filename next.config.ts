import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      }
    ],
  },
  // Add other Next.js config options below as needed
};

export default nextConfig;
