import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items.length) return null;

  return <nav className="breadcrumbs" aria-label="Breadcrumb">
    {items.map((item, index) => (
      <span className="breadcrumb-item" key={item.href}>
        {index > 0 && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
        <Link href={item.href}>{item.label}</Link>
      </span>
    ))}
  </nav>;
}
