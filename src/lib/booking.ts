import { clinic } from "../data/clinic";

export function openBooking() {
  window.open(clinic.bookingUrl, "_blank", "noopener,noreferrer");
}
