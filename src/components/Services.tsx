import { clinic } from "../data/clinic";
import BookingLink from "./BookingLink";
import { Pin, PinSimple, Monitor, Clock } from "./Icons";

const icons = { pin: Pin, "pin-simple": PinSimple, monitor: Monitor } as const;

export default function Services() {
  const d = clinic.services;
  return (
    <section id="atendimento" className="relative overflow-x-clip py-[72px] md:py-[96px] bg-linen">
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-rose/45 blur-3xl" />
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="mb-14 reveal-item">
          <span className="section-label text-rust block mb-3">{d.label}</span>
          <h2 className="font-fraunces text-3xl md:text-5xl font-light leading-tight text-ink mb-4">
            {d.titleStart}
            <span className="italic text-rust font-light hl">{d.titleEmphasis}</span>
          </h2>
          <p className="text-moss text-base md:text-lg max-w-[62ch]">{d.text}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {d.items.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <div
                key={s.title}
                className="bg-paper rounded-[28px] p-7 md:p-10 border border-rose/40 border-t-2 border-t-rose shadow-soft flex flex-col justify-between reveal-item card-lift"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-moss font-medium mb-4">
                    <span className="flex items-center gap-1.5">
                      <Icon /> {s.mode}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock /> {s.duration}
                    </span>
                  </div>
                  <h3 className="font-fraunces text-2xl text-ink font-normal mb-3">{s.title}</h3>
                  <p className="text-moss text-sm mb-6 leading-relaxed">{s.text}</p>
                  <ul className="space-y-2.5 text-sm text-ink mb-8">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="pt-6 border-t border-rose/40" />
                  <BookingLink className="w-full h-[52px] rounded-full bg-forest text-paper font-medium text-sm hover:bg-moss transition-colors">
                    {d.cta}
                  </BookingLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
