import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "standalone",
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
};

export default nextConfig;
