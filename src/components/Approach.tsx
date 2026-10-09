import { clinic } from "../data/clinic";

export default function Approach() {
  const d = clinic.approach;
  return (
    <section id="como-trabalho" className="relative overflow-x-clip py-[72px] md:py-[96px] bg-paper">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-rose/45 blur-3xl" />
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-24">
          <div className="lg:col-span-7 prose-editorial reveal-item">
            <span className="section-label text-rust block mb-3">{d.label}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl lg:text-[56px] font-light leading-tight text-ink mb-6">
              {d.titleStart}
              <span className="italic text-rust font-light hl">{d.titleEmphasis}</span>
              {d.titleEnd}
            </h2>
            <p className="text-moss text-base md:text-lg mb-6">{d.text}</p>
            <div className="border-l-2 border-rose pl-5 py-1 text-ink font-medium text-base">
              {d.highlight}
            </div>
          </div>
          <div className="lg:col-span-5 reveal-item">
            <div className="max-w-[380px] mx-auto lg:ml-auto">
              <div className="relative">
                {/* detalhe simples atrás da foto: só uma moldura fina deslocada */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[28px] border border-rose pointer-events-none" />
                <div className="relative rounded-[28px] overflow-hidden border border-rose/40 bg-linen shadow-soft">
                <img
                  src={clinic.images.approach}
                  alt="Marina Rezze Barthelson em atendimento profissional"
                  width={384}
                  height={384}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover"
                />
                </div>
              </div>
              <p className="text-xs text-moss font-medium mt-6 text-center lg:text-right">
                {d.photoCaption}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 md:pb-24 border-b border-rose/40">
          {d.pillars.map((p) => (
            <div key={p.n} className="reveal-item">
              <span className="font-fraunces text-3xl text-terracotta font-normal block mb-3">
                {p.n}
              </span>
              <h3 className="font-fraunces text-2xl text-ink font-normal mb-3">{p.title}</h3>
              <p className="text-moss text-base leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
          <div className="bg-forest text-paper rounded-[28px] p-7 md:p-10 reveal-item">
            <span className="text-xs uppercase tracking-label font-medium text-sage block mb-2">
              {d.changesLabel}
            </span>
            <h3 className="font-fraunces text-2xl md:text-3xl text-paper font-normal mb-6">
              {d.changesTitle}
            </h3>
            <ul className="space-y-4 font-fraunces text-lg text-paper/90">
              {d.changes.map((c) => (
                <li key={c} className="flex items-start space-x-3">
                  <span className="text-rose text-xl mt-0.5">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-linen text-ink rounded-[28px] p-7 md:p-10 border border-rose/40 reveal-item flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-label font-medium text-rust block mb-2">
                {d.notLabel}
              </span>
              <h3 className="font-fraunces text-2xl md:text-3xl text-ink font-normal mb-6">
                {d.notTitle}
              </h3>
              <ul className="space-y-4 text-base text-ink mb-8">
                {d.notItems.map((n) => (
                  <li key={n} className="flex items-start space-x-3">
                    <span className="text-terracotta font-semibold text-lg leading-none mt-1">✕</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-moss border-t border-rose/40 pt-4">{d.notFooter}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
