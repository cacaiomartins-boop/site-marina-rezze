import { clinic } from "../data/clinic";
import { Stars } from "./Icons";

export default function Testimonials() {
  const d = clinic.testimonials;
  return (
    <section id="depoimentos" className="relative overflow-x-clip py-[72px] md:py-[96px] bg-blush">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 prose-editorial reveal-item">
            <span className="section-label text-rust block mb-3">{d.label}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-light leading-tight text-ink mb-6">
              {d.titleStart}
              <span className="italic text-rust font-light hl">{d.titleEmphasis}</span>
            </h2>
            <div className="mb-6">
              <div className="flex items-center text-terracotta space-x-1 mb-2">
                <Stars className="w-5 h-5" />
              </div>
              <span className="font-fraunces text-6xl text-terracotta font-normal block">
                {clinic.rating}
              </span>
              <p className="text-sm text-moss mt-1 font-medium">
                {clinic.reviewCount} avaliações no Doctoralia
              </p>
            </div>
            <p className="text-sm text-moss leading-relaxed">{d.note}</p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {d.columns.map((col, ci) => (
                <div key={ci} className={`space-y-6 ${ci === 1 ? "testimonial-col-stagger" : ""}`}>
                  {col.map((t) => (
                    <div
                      key={t.author}
                      className="bg-paper rounded-[28px] p-7 border border-rose/40 shadow-soft reveal-item card-lift"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-rose text-4xl font-fraunces leading-none">“</span>
                        <span className="text-[11px] uppercase tracking-wider text-moss font-medium bg-blush-deep/70 px-2.5 py-1 rounded-full">
                          {d.badge}
                        </span>
                      </div>
                      <p className="text-sm text-ink leading-relaxed mb-6 font-normal">"{t.text}"</p>
                      <div className="border-t border-rose/40 pt-3">
                        <p className="font-fraunces text-base text-ink font-normal">{t.author}</p>
                        <p className="text-xs text-moss">{t.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
