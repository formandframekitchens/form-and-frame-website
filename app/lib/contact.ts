export const BUSINESS_PHONE_DISPLAY = "07933 026532";
export const BUSINESS_PHONE_DIGITS = "07933026532";
export const BUSINESS_PHONE_E164 = "447933026532";
export const BUSINESS_EMAIL = "sales@formandframekitchens.co.uk";

export const PHONE_HREF = `tel:${BUSINESS_PHONE_DIGITS}`;
export const EMAIL_HREF = `mailto:${BUSINESS_EMAIL}`;

export function whatsappHref(message = "Hello, I'd like to discuss a project with Form & Frame.") {
  return `https://wa.me/${BUSINESS_PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_HREF = whatsappHref();
export const WHATSAPP_NUMBER = BUSINESS_PHONE_E164;
export const planContactHref = "/contact?service=kitchen-installation#enquiry-form";
