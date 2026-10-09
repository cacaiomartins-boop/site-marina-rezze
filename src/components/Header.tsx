import { useEffect, useState } from "react";
import { clinic } from "../data/clinic";
import BookingLink from "./BookingLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerCls = scrolled
    ? "bg-linen/95 backdrop-blur-md text-ink shadow-soft border-b border-rose/40 py-3.5"
    : "text-paper py-5";
  const btnCls = scrolled
    ? "bg-forest text-paper hover:bg-moss"
    : "bg-paper text-forest hover:bg-sand";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerCls}`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#topo" className="group">
          <span className="block font-fraunces text-xl md:text-2xl font-normal tracking-tight group-hover:opacity-90 transition-opacity">
            {clinic.name}
          </span>
          <span className="block text-[11px] uppercase tracking-label font-medium opacity-80 mt-0.5">
            Psicóloga Psicanalista · {clinic.crp}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:flex items-center space-x-8 text-[14px] font-medium tracking-wide">
          {clinic.nav.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sage transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookingLink className={`h-[52px] px-7 rounded-full font-medium text-[15px] transition-colors duration-200 ${btnCls}`}>
            Agendar Consulta
          </BookingLink>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            type="button"
            aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            className="p-2"
          >
            <svg aria-hidden="true" focusable="false" className="w-7 h-7 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
              <line x1="4" x2="20" y1="7" y2="7" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="17" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="lg:hidden bg-linen text-ink border-b border-rose/40 shadow-soft px-6 py-8">
          <div className="flex flex-col space-y-6">
            {clinic.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-fraunces text-2xl text-ink hover:text-rust transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 border-t border-rose/40">
              <BookingLink className="w-full h-[52px] rounded-full bg-forest text-paper font-medium text-base hover:bg-moss transition-colors">
                Agendar Consulta
              </BookingLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
