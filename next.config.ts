import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "raw.githubusercontent.com" },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
