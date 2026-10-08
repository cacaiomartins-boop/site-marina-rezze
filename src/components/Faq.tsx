import { clinic } from "../data/clinic";
import { openBooking } from "../lib/booking";

export default function Faq() {
  const d = clinic.faq;
  return (
    <section id="duvidas" className="relative overflow-x-clip py-[72px] md:py-[96px] bg-linen">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-rose/45 blur-3xl" />
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky-editorial prose-editorial reveal-item">
              <span className="section-label text-rust block mb-3">{d.label}</span>
              <h2 className="font-fraunces text-3xl md:text-5xl font-light leading-tight text-ink mb-6">
                {d.titleStart}
                <span className="italic text-rust font-light hl">{d.titleEmphasis}</span>
              </h2>
              <p className="text-moss text-base md:text-lg mb-8">{d.text}</p>
              <button
                type="button"
                onClick={openBooking}
                className="h-[52px] px-8 rounded-full border border-forest text-forest font-medium text-[15px] hover:bg-forest hover:text-paper transition-colors"
              >
                {d.cta}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {d.items.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group bg-paper rounded-[28px] p-6 border border-rose/40 transition-all reveal-item"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                  <h3 className="font-fraunces text-xl text-ink font-normal pr-4">{f.q}</h3>
                  <span className="faq-icon text-rust text-2xl font-light shrink-0 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-rose/40 text-moss text-base leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
