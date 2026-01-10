/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static export
  reactStrictMode: true,  // optional, recommended
  basePath: '',           // leave empty to avoid nested /out/youth
  assetPrefix: '',        // load JS/CSS from root
};

export default nextConfig;
