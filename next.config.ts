/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static export
  basePath: '/youth',  // ← ADD THIS
  reactStrictMode: true,  // optional, recommended
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
