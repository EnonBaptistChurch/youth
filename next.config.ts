import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // static export
  basePath: "",      // no extra prefix
  assetPrefix: "",   // load assets from repo root
};

export default nextConfig;
