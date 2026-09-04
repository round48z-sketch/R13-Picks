import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    const legacy = [
      {
        from: "/picks/focus-over-ear-headphones",
        to: "/picks/anker-soundcore-space-2",
      },
      {
        from: "/picks/quiet-commute-wireless-earbuds",
        to: "/picks/denon-ah-c830ncw",
      },
      {
        from: "/picks/everyday-minimal-watch",
        to: "/picks/brillamico-lily-46mm-black-silver",
      },
    ];

    return [
      ...legacy.map((item) => ({
        source: item.from,
        destination: item.to,
        permanent: true,
      })),
      ...legacy.flatMap((item) =>
        ["en", "ko", "zh"].map((locale) => ({
          source: `/${locale}${item.from}`,
          destination: `/${locale}${item.to}`,
          permanent: true,
        })),
      ),
    ];
  },
};

export default nextConfig;
