import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: [
    "@wb/website",
    "@wb/api",
    "@wb/database",
    "@wb/types",
    "@wb/utils",
  ],
};

export default nextConfig;
