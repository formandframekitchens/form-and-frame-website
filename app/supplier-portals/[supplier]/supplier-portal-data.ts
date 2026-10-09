import type { SupplierPortalSlug } from "@/app/lib/supplier-portal";

type PortalCopy = {
  opening: string;
  systemNote: string;
  reviewPoints: string[];
};

export const supplierPortalCopy: Record<SupplierPortalSlug, PortalCopy> = {
  "b-and-q": {
    opening: "This private introduction is for the B&Q team considering independent installation capacity. It is not a claim of appointment, endorsement or approved-installer status.",
    systemNote: "For a B&Q project, we review the specified cabinet range, assembly requirements and product instructions rather than assuming one construction system across every order.",
    reviewPoints: ["Cabinet format and component schedule", "Panels, fillers, plinths and appliance doors", "Worktop, sink, hob and appliance interfaces"],
  },
  magnet: {
    opening: "This private introduction is for the Magnet team considering independent installation capacity. It is not a claim of appointment, endorsement or approved-installer status.",
    systemNote: "For a Magnet project, we check the chosen range, supplied cabinet format and current instructions before allowing for assembly, installation and finishing.",
    reviewPoints: ["Final plan and product specification", "Tall housing, corner and drawer clearances", "End-panel, plinth and worktop junctions"],
  },
  wickes: {
    opening: "This private introduction is for the Wickes team considering independent installation capacity. It is not a claim of appointment, endorsement or approved-installer status.",
    systemNote: "For a Wickes project, the chosen range, cabinet format and component list establish the assembly and installation scope.",
    reviewPoints: ["Order contents and supplied instructions", "Panels, fillers, plinths and appliance openings", "Worktop, service and finishing sequence"],
  },
  wren: {
    opening: "This private introduction is for the Wren team considering independent installation capacity. It is not a claim of appointment, endorsement or approved-installer status.",
    systemNote: "For a Wren project, we identify the exact units, supplied assembly format and applicable instructions because details can differ between ranges.",
    reviewPoints: ["Range, unit and appliance schedule", "Corner, panel, filler and housing details", "Worktop responsibility and installation sequence"],
  },
};
