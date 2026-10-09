import type { NextConfig } from "next";
import galleryImageRedirects from "./app/lib/gallery-image-redirects.json";

const nextConfig: NextConfig = {
  async headers() {
    return ["/supplier-portals/:path*", "/api/supplier-portals/:path*"].map(source => ({
      source,
      headers: [
        { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        { key: "Cache-Control", value: "private, no-store" },
        { key: "Referrer-Policy", value: "same-origin" },
      ],
    }));
  },
  async redirects() {
    return [
      ...galleryImageRedirects,
      {
        source: "/gallery/manchester-makeup-island-dressing-table",
        destination: "/gallery/manchester-walk-in-wardrobe",
        permanent: true,
      },
      {
        source: "/gallery/stourcliff-white-handleless-kitchen",
        destination: "/gallery/handleless-kitchen-installation",
        permanent: true,
      },
      {
        source: "/gallery/belgravia-leather-wardrobe",
        destination: "/gallery/belgravia-kids-room-home-office-furniture",
        permanent: true,
      },
      {
        source: "/gallery/8-leys-road-walk-in-wardrobe",
        destination: "/gallery/esher-luxury-residence-walk-in-wardrobe",
        permanent: true,
      },
      {
        source: "/gallery/8-leys-road-kids-room-tv-unit",
        destination: "/gallery/esher-luxury-residence-kids-room-tv-unit",
        permanent: true,
      },
      {
        source: "/gallery/8-leys-road-home-office",
        destination: "/gallery/esher-luxury-residence-home-office",
        permanent: true,
      },
      {
        source: "/gallery/8-leys-road-bookcase-leather-brass",
        destination: "/gallery/esher-luxury-residence-bookcase-leather-brass",
        permanent: true,
      },
      {
        source: "/gallery/8-leys-road-alcove-units",
        destination: "/gallery/esher-luxury-residence-alcove-units",
        permanent: true,
      },
      {
        source: "/gallery/8-leys-road-wine-cellar",
        destination: "/gallery/esher-luxury-residence-wine-cellar",
        permanent: true,
      },
      {
        source: "/gallery/alexander-james-bespoke-bookcase",
        destination: "/gallery/bookcase-in-esher",
        permanent: true,
      },
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
