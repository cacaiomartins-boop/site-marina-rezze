import { clinic } from "../data/clinic";
import BookingLink from "./BookingLink";
import { Sparkle } from "./Icons";

export default function About() {
  const d = clinic.about;
  return (
    <section id="sobre" className="relative overflow-x-clip py-[72px] md:py-[96px] bg-blush">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-5 reveal-item">
            <div className="relative max-w-[420px] mx-auto lg:mx-0">
              {/* decoração rosa atrás do retrato */}
              <div className="absolute -top-8 -left-4 sm:-left-8 w-[90%] h-[94%] rounded-t-[999px] rounded-b-[32px] bg-blush-deep z-0" />
              <div className="absolute -top-10 -right-3 sm:-right-8 w-32 h-32 rounded-full border border-rose z-0" />
              <div className="absolute -bottom-6 -left-4 sm:-left-8 w-28 h-28 dots-rose z-0" />
              <Sparkle className="absolute top-10 -right-2 sm:-right-6 w-8 h-8 text-rose z-20" />
              <Sparkle className="absolute bottom-24 -left-1 sm:-left-5 w-5 h-5 text-rose z-20" />
              <div className="relative z-10 rounded-[28px] overflow-hidden bg-linen shadow-soft border border-rose/40">
                <img
                  src={clinic.images.portrait}
                  alt="Retrato da Psicóloga e Psicanalista Marina Rezze Barthelson em seu consultório"
                  width={384}
                  height={512}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-paper/95 backdrop-blur-sm rounded-[22px] p-4 border border-rose/40 shadow-soft">
                  <p className="font-fraunces text-lg text-ink font-normal">{clinic.name}</p>
                  <p className="text-xs text-moss font-medium mt-0.5">{d.cardSubtitle}</p>
                  <p className="text-xs text-rust font-normal mt-1 border-t border-rose/40 pt-1">
                    {d.cardEducation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 prose-editorial reveal-item">
            <span className="section-label text-rust block mb-3">{d.label}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-light leading-tight text-ink mb-6">
              {d.titleStart}
              <span className="italic text-rust font-light hl">{d.titleEmphasis}</span>
              {d.titleEnd}
            </h2>
            <div className="space-y-4 text-ink text-base md:text-lg mb-8">
              {d.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <blockquote className="border-l-2 border-rose pl-5 py-1 text-ink font-fraunces italic text-lg leading-relaxed mb-8">
              "{d.quote}"
            </blockquote>
            <div className="mb-10">
              <p className="text-xs uppercase tracking-wider text-moss font-medium mb-3">
                {d.credentialsTitle}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {d.credentials.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 rounded-full border border-rose/60 bg-blush text-xs font-medium text-ink"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <BookingLink className="h-[52px] px-8 rounded-full bg-forest text-paper font-medium text-[15px] hover:bg-moss transition-colors">
              {d.cta}
            </BookingLink>
          </div>
        </div>
      </div>
    </section>
  );
}
