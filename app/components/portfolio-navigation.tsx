import Link from "next/link";
import { portfolioLinks, type GalleryPortfolio } from "../lib/gallery-catalog";

export function PortfolioNavigation({ current }: { current?: GalleryPortfolio }) {
  return <nav className="portfolio-navigation" aria-label="Explore portfolios">
    {Object.entries(portfolioLinks).map(([key, item]) => <Link key={key} href={item.href} aria-current={current === key ? "page" : undefined}>{item.label}<span aria-hidden="true">↗</span></Link>)}
  </nav>;
}
