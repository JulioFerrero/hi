import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@hi/api",
    "@hi/database",
    "@hi/website",
    "@hi/cms",
    "@hi/ui",
    "@hi/types",
    "@hi/utils",
  ],
};

export default nextConfig;
