import type { ReactNode } from "react";
import { clinic } from "../data/clinic";

type Props = { className?: string; children: ReactNode };

// Botões "Agendar": link real para o perfil no Doctoralia (abre em nova aba).
export default function BookingLink({ className = "", children }: Props) {
  return (
    <a
      href={clinic.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-lift inline-flex items-center justify-center ${className}`}
    >
      {children}
      <span className="sr-only"> (abre o Doctoralia em uma nova aba)</span>
    </a>
  );
}
