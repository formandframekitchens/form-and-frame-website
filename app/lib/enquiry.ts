import { joineryOptions, type JoineryId } from "./joinery-types";

export const serviceOptions = [
  { value: "bespoke-joinery", label: "Bespoke joinery & fitted furniture" },
  { value: "kitchen-installation", label: "Kitchen installation" },
  { value: "in-frame-kitchens", label: "In-frame kitchen" },
  { value: "bespoke-kitchens", label: "Bespoke kitchen" },
  { value: "internal-door-installation", label: "Internal door installation" },
  { value: "joinery-installation", label: "Joinery & furniture installation" },
  { value: "other", label: "Other joinery enquiry" },
] as const;

export const supplierOptions = [
  { value: "howdens", label: "Howdens" },
  { value: "wren", label: "Wren" },
  { value: "ikea", label: "IKEA" },
  { value: "magnet", label: "Magnet" },
  { value: "wickes", label: "Wickes" },
  { value: "benchmarx", label: "Benchmarx" },
  { value: "b-and-q", label: "B&Q" },
  { value: "other", label: "Other / overseas supplier" },
  { value: "not-chosen", label: "Not chosen yet" },
] as const;

export const installationOptions = [
  {
    value: "own-kitchen", label: "I have my own kitchen",
    description: "You’ve chosen or ordered a kitchen and need an independent installer.",
    service: "kitchen-installation", usesSupplier: true,
  },
  {
    value: "in-frame-installation", label: "I have an in-frame kitchen",
    description: "Your supplier is providing a kitchen with doors set inside a visible frame. You need fitting only.",
    service: "kitchen-installation", usesSupplier: true,
  },
  {
    value: "design-supply-installation", label: "In-frame kitchen designed, supplied & installed by Form & Frame",
    description: "Explore our complete design, supply and installation service for traditional in-frame kitchens.",
    service: "in-frame-kitchens", usesSupplier: false,
  },
  {
    value: "bespoke-design-supply-installation", label: "Bespoke kitchen designed, supplied & installed by Form & Frame",
    description: "A kitchen designed and supplied for your room, with installation included.",
    service: "bespoke-kitchens", usesSupplier: false,
  },
  {
    value: "advice", label: "I’m still planning",
    description: "You’re exploring your options and would like help understanding the installation work.",
    service: "kitchen-installation", usesSupplier: true,
  },
] as const;

export type ServiceId = typeof serviceOptions[number]["value"];
export type SupplierId = typeof supplierOptions[number]["value"];
export type InstallationId = typeof installationOptions[number]["value"];
export type EnquirySelection = {
  service: ServiceId | "";
  supplier: SupplierId | "";
  installation: InstallationId | "";
  joinery: JoineryId | "";
};

export function isKitchenService(service: string) {
  return service === "kitchen-installation" || service === "in-frame-kitchens" || service === "bespoke-kitchens";
}

// URL values are identifiers, never free text to inject into a visitor's enquiry.
export function readEnquirySelection(params: Pick<URLSearchParams, "get">): EnquirySelection {
  const service = serviceOptions.find(option => option.value === params.get("service"))?.value || "";
  const installation = installationOptions.find(option => option.value === params.get("installation") && option.service === service);
  const supplier = isKitchenService(service) && installation?.usesSupplier !== false
    ? supplierOptions.find(option => option.value === params.get("supplier"))?.value || ""
    : "";
  const joinery = service === "bespoke-joinery"
    ? joineryOptions.find(option => option.value === params.get("joinery"))?.value || ""
    : "";
  return { service, supplier, installation: installation?.value || "", joinery };
}

export function enquiryHref(selection: { service: ServiceId; supplier?: SupplierId | ""; installation?: InstallationId | ""; joinery?: JoineryId | "" }) {
  const params = new URLSearchParams({ service: selection.service });
  if (selection.supplier) params.set("supplier", selection.supplier);
  if (selection.installation) params.set("installation", selection.installation);
  if (selection.joinery && selection.service === "bespoke-joinery") params.set("joinery", selection.joinery);
  return `/contact?${params.toString()}#enquiry-form`;
}

export function enquiryEmail(data: FormData) {
  const selection = readEnquirySelection({ get: key => String(data.get(key) || "") });
  const service = serviceOptions.find(option => option.value === selection.service)?.label || "Form & Frame";
  const supplier = supplierOptions.find(option => option.value === selection.supplier)?.label || "Not specified";
  const installation = installationOptions.find(option => option.value === selection.installation)?.label || "Not specified";
  return {
    subject: `Website enquiry — ${service}`,
    body: [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Postcode / town: ${data.get("location") || ""}`,
      `Service: ${service}`,
      ...(selection.service === "bespoke-joinery" ? [`Joinery type: ${joineryOptions.find(option => option.value === selection.joinery)?.label || "Not specified"}`] : []),
      ...(isKitchenService(selection.service) ? [`Kitchen requirement: ${installation}`, `Kitchen supplier: ${installationOptions.find(option => option.value === selection.installation)?.usesSupplier === false ? "Form & Frame" : supplier}`] : []),
      `Project stage: ${data.get("stage") || ""}`,
      "", String(data.get("message") || ""), "",
      "Plans / images: please attach them to this email before sending.",
    ].join("\n"),
  };
}
