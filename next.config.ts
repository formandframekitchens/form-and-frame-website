import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gallery/golden-textured-front-cabinet",
        destination: "/gallery/putney-heath-bespoke-cabinets",
        permanent: true,
      },
      {
        source: "/gallery/dubai-bespoke-tv-unit",
        destination: "/gallery/grey-black-bespoke-media-wall",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
