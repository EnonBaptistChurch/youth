/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/youth' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Remove basePath - GitHub Pages handles this automatically
};

export default nextConfig;