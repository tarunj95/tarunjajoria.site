import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export", 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
