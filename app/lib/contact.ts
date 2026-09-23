// Add the real WhatsApp Business number here in international digits-only format
// (country code included, no + or spaces). Leave empty until configured.
export const WHATSAPP_NUMBER: string = "";
export const planContactHref = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Form & Frame, I would like to discuss my kitchen installation and share my kitchen plan.")}`
  : "/#quote-contact";
