/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/youth',  // ← ADD THIS!
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Remove basePath - GitHub Pages handles this automatically
};

export default nextConfig;