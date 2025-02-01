import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "i.pinimg.com" },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
