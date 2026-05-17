import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@hi/website",
    "@hi/api",
    "@hi/database",
    "@hi/types",
    "@hi/utils",
  ],
};

export default nextConfig;
