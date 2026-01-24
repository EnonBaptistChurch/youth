/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/youth' : '';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/youth' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;