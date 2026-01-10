import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static export
  basePath: "/",    // repo already determines /youth
  assetPrefix: "/", // repo root
};

export default nextConfig;
