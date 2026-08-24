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
      {
        source: "/picks/quiet-commute-wireless-earbuds",
        destination: "/picks/denon-ah-c830ncw",
        permanent: true,
      },
      {
        source: "/picks/everyday-minimal-watch",
        destination: "/picks/brillamico-lily-46mm-black-silver",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
