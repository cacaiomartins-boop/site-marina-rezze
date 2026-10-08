import { clinic } from "../data/clinic";
import { openBooking } from "../lib/booking";
import { Pin, Monitor } from "./Icons";

export default function Contact() {
  const d = clinic.contact;
  return (
    <section id="contato" className="py-[72px] md:py-[96px] bg-forest text-paper">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 prose-editorial reveal-item">
            <span className="section-label text-sage block mb-3">{d.label}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-light leading-tight text-paper mb-6">
              {d.titleStart}
              <span className="italic text-blush-deep font-light">{d.titleEmphasis}</span>
            </h2>
            <p className="text-paper/80 text-base md:text-lg mb-8 leading-relaxed">{d.text}</p>
            <div className="mb-10">
              <button
                type="button"
                onClick={openBooking}
                className="h-[52px] px-8 rounded-full bg-paper text-forest font-medium text-[15px] hover:bg-sand transition-colors"
              >
                {d.cta}
              </button>
            </div>

            <div className="space-y-6 border-t border-rose/30 pt-8">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-full bg-moss/40 text-sage shrink-0 mt-1">
                  <Pin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-fraunces text-lg text-paper font-normal">Consultório Presencial</h3>
                  <p className="text-sm text-paper/80 mt-1">
                    {clinic.building} — {clinic.street}, {clinic.room}
                    <br />
                    {clinic.neighborhood}, Campinas — SP, CEP {clinic.postalCode}
                  </p>
                  <p className="text-xs text-sage mt-1">Telefone: {clinic.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-full bg-moss/40 text-sage shrink-0 mt-1">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-fraunces text-lg text-paper font-normal">Atendimento Online</h3>
                  <p className="text-sm text-paper/80 mt-1">
                    {d.onlineText}
                    <br />
                    {d.onlineNote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal-item">
            <div className="bg-paper text-ink rounded-[28px] overflow-hidden border border-rose/40 shadow-soft">
              <div className="p-7">
                <span className="text-xs uppercase tracking-wider text-moss font-medium block mb-1">
                  Localização do consultório
                </span>
                <p className="font-fraunces text-xl text-ink font-normal">
                  {clinic.street}, {clinic.room.toLowerCase()} — {clinic.neighborhood}, Campinas
                </p>
                <div className="mt-2">
                  <a
                    href={clinic.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-rust hover:underline"
                  >
                    Abrir no Google Maps ↗
                  </a>
                </div>
              </div>
              <div className="w-full">
                <iframe
                  title="Mapa do consultório em Campinas"
                  src={clinic.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[320px] md:h-[400px] border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
