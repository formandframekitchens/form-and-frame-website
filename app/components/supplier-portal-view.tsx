import type { SupplierPortalSlug } from "../lib/supplier-portal";

// This marker is rendered only after server authorization. The shared analytics
// listener records it once the B22 GA script is ready, including on client navigation.
export function SupplierPortalView({ supplier }: { supplier: SupplierPortalSlug }) {
  return <span hidden data-authorized-supplier={supplier} />;
}
