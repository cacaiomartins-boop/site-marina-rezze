import { clinic } from "../data/clinic";

export default function ForWhom() {
  const d = clinic.forWhom;
  return (
    <section id="para-quem-e" className="relative overflow-x-clip py-[72px] md:py-[96px] bg-linen">
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-rose/45 blur-3xl" />
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky-editorial prose-editorial reveal-item">
              <span className="section-label text-rust block mb-4">{d.label}</span>
              <h2 className="font-fraunces text-3xl md:text-5xl font-light leading-tight text-ink mb-6">
                {d.titleStart}
                <span className="italic text-rust font-light hl">{d.titleEmphasis}</span>
                {d.titleEnd}
              </h2>
              <p className="text-moss text-base md:text-lg mb-8">{d.text}</p>
              <blockquote className="border-l-2 border-rose pl-5 py-1 text-ink font-fraunces italic text-lg leading-relaxed">
                "{d.quote}"
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {d.items.map((it, idx) => (
              <div key={it.title} className="reveal-item pt-2 pb-8 border-b border-rose/40">
                <div className="flex items-baseline space-x-4 mb-2">
                  <span className="font-fraunces text-3xl md:text-4xl text-terracotta font-normal">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-fraunces text-2xl text-ink font-normal">{it.title}</h3>
                </div>
                <p className="text-moss text-base pl-12 max-w-[58ch]">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
