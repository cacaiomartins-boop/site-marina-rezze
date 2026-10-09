import { clinic } from "../data/clinic";

export default function Steps() {
  const d = clinic.steps;
  return (
    <section id="como-funciona" className="relative overflow-x-clip py-[72px] md:py-[96px] bg-forest text-paper">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="mb-14 reveal-item">
          <span className="section-label text-sage block mb-3">{d.label}</span>
          <h2 className="font-fraunces text-3xl md:text-5xl font-light leading-tight text-paper mb-4">
            {d.titleStart}
            <span className="italic text-blush-deep font-light">{d.titleEmphasis}</span>
          </h2>
          <p className="text-paper/85 text-base md:text-lg max-w-[62ch]">{d.text}</p>
          <div className="mt-6 h-px w-24 bg-rose/70" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {d.items.map((s) => (
            <div key={s.n} className="reveal-item p-6 rounded-[28px] card-lift bg-forest border border-white/25">
              <span className="font-fraunces text-3xl md:text-4xl text-terracotta-light block mb-4">
                {s.n}
              </span>
              <h3 className="font-fraunces text-xl text-paper font-normal mb-2">{s.title}</h3>
              <p className="text-paper/85 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
