import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@wb/api",
    "@wb/database",
    "@wb/website",
    "@wb/cms",
    "@wb/ui",
    "@wb/types",
    "@wb/utils",
  ],
};

export default nextConfig;
