import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Désactiver ESLint pendant la construction
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
