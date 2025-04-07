import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: "/gastromenu",
  // assetPrefix: "/gastromenu",
};

export default nextConfig;
