export type SocialContentItem = {
  id: "kitchen-installation" | "bespoke-joinery" | "internal-doors";
  title: string;
  copy: string;
  image: {
    src: string;
    alt: string;
  };
  siteHref: string;
  siteLabel: string;
  instagramHref: string;
};

export const instagramProfileUrl = "https://www.instagram.com/formandframekitchens/";

/**
 * A small, deliberately curated bridge between the website and Instagram.
 * Keep this list to three items and use only first-party, public website images.
 * Replace instagramHref with a verified post/Reel permalink when one is available.
 */
export const socialContent: readonly SocialContentItem[] = [
  {
    id: "kitchen-installation",
    title: "Kitchen installation",
    copy: "See the fitting details here, then follow current kitchen work on Instagram.",
    image: {
      src: "/images/homepage/white-handleless-kitchen-fitting-integrated-appliances.webp",
      alt: "White handleless kitchen with integrated appliances",
    },
    siteHref: "/kitchen-installation",
    siteLabel: "Explore kitchen fitting",
    instagramHref: instagramProfileUrl,
  },
  {
    id: "bespoke-joinery",
    title: "Bespoke fitted furniture",
    copy: "Explore made-to-measure furniture on the website and see workshop and project updates on Instagram.",
    image: {
      src: "/images/gallery/g27/g27-01-front-view-of-manchester-walk-in-wardrobe.webp",
      alt: "Front view of a bespoke walk-in wardrobe",
    },
    siteHref: "/bespoke-joinery",
    siteLabel: "Explore bespoke joinery",
    instagramHref: instagramProfileUrl,
  },
  {
    id: "internal-doors",
    title: "Internal doors",
    copy: "View the installation service and find selected door details and updates on Instagram.",
    image: {
      src: "/images/internal-doors/dark-glazed-double-doors-brass-detail.jpg",
      alt: "Dark glazed double internal doors with brass details",
    },
    siteHref: "/internal-door-installation",
    siteLabel: "Explore internal doors",
    instagramHref: instagramProfileUrl,
  },
];
