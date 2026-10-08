import { clinic } from "../data/clinic";

export function whatsappUrl() {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    clinic.whatsappMessage
  )}`;
}

export function openWhatsApp() {
  window.open(whatsappUrl(), "_blank", "noopener,noreferrer");
}
