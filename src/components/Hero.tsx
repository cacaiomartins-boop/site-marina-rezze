import { clinic } from "../data/clinic";
import BookingLink from "./BookingLink";
import { Stars, Pin, Monitor, Shield } from "./Icons";

export default function Hero() {
  const h = clinic.hero;
  return (
    <section
      id="topo"
      className="relative min-h-[90vh] bg-forest text-paper flex items-end overflow-hidden pt-32 pb-24 md:pb-28"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={clinic.images.hero}
          alt="Consultório acolhedor de Marina Rezze Barthelson em Campinas com poltrona, divã e estante de livros"
          width={512}
          height={384}
          decoding="async"
          {...{ fetchpriority: "high" }}
          className="hero-img-zoom w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F6652] via-[#4F6652]/85 to-[#4F6652]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4F6652] via-transparent to-[#4F6652]/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 prose-editorial">
            <span className="inline-block text-sage font-medium tracking-label text-xs uppercase mb-4">
              {h.eyebrow}
            </span>
            <h1 className="font-fraunces text-4xl sm:text-5xl md:text-[64px] leading-[1.08] font-normal tracking-tight-serif text-paper mb-6">
              {h.titleStart}
              <span className="italic text-blush-deep font-light">{h.titleEmphasis}</span>
              {h.titleEnd}
            </h1>
            <p className="text-paper/85 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-[54ch]">
              {h.text}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <BookingLink className="h-[52px] px-8 rounded-full bg-paper text-forest font-medium text-[15px] hover:bg-sand transition-colors text-center">
                {h.cta}
              </BookingLink>
              <a
                href="#como-trabalho"
                className="inline-flex items-center justify-center h-[52px] px-6 text-paper/90 hover:text-paper font-medium text-[15px] transition-colors group"
              >
                {h.secondary}
                <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="w-full max-w-[380px] bg-linen text-ink rounded-[28px] p-7 md:p-8 shadow-soft border border-rose/40">
              <div className="pb-5 mb-5 border-b border-rose/40">
                <div className="flex items-center space-x-1.5 mb-1 text-terracotta">
                  <Stars />
                  <span className="font-fraunces text-base font-semibold text-ink ml-1.5">
                    {clinic.rating} de 5.0
                  </span>
                </div>
                <p className="text-xs text-moss font-medium">
                  {clinic.reviewCount} opiniões verificadas · Doctoralia
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-blush-deep/60 text-forest shrink-0 mt-0.5">
                    <Pin />
                  </div>
                  <div>
                    <span className="font-medium text-ink block">Consultório em Campinas</span>
                    <a
                      href={clinic.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tap text-xs text-rust hover:underline block leading-snug"
                    >
                      Rua Clóvis Beviláqua 185, sl 11 — Jd. Brasil ↗
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-blush-deep/60 text-forest shrink-0 mt-0.5">
                    <Monitor />
                  </div>
                  <div>
                    <span className="font-medium text-ink block">Teleconsulta por vídeo</span>
                    <span className="text-xs text-moss leading-snug block">
                      Link seguro via Google Meet enviado antes da sessão
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-blush-deep/60 text-forest shrink-0 mt-0.5">
                    <Shield />
                  </div>
                  <div>
                    <span className="font-medium text-ink block">Registro Ativo</span>
                    <span className="text-xs text-moss leading-snug block">
                      {clinic.crp} · Conselho Regional de Psicologia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
