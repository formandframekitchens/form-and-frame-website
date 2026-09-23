import { notFound } from "next/navigation";
import { SupplierPage } from "../../components/service-page";
import { getSupplier, supplierPages } from "../../lib/supplier-pages";
import { serviceMetadata } from "../../lib/service-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return supplierPages.map(({ slug }) => ({ supplier: slug }));
}

export async function generateMetadata({ params }: PageProps<"/kitchen-installation/[supplier]">) {
  const supplier = getSupplier((await params).supplier);
  if (!supplier) notFound();
  return serviceMetadata(`${supplier.name} Kitchen Installation Luton`, supplier.description, `/kitchen-installation/${supplier.slug}`);
}

export default async function Page({ params }: PageProps<"/kitchen-installation/[supplier]">) {
  const supplier = getSupplier((await params).supplier);
  if (!supplier) notFound();
  return <SupplierPage supplier={supplier} />;
}
