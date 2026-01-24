/** @type {import('next').NextConfig} */
import { basePath } from './modules/config';
const nextConfig = {
  output: 'export',
  basePath: basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;