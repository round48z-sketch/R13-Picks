import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/picks/focus-over-ear-headphones",
        destination: "/picks/anker-soundcore-space-2",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
