import { clinic } from "../data/clinic";

const links = [
  ["#sobre", "Sobre"],
  ["#como-trabalho", "Abordagem"],
  ["#como-funciona", "Passo a passo"],
  ["#atendimento", "Atendimento"],
  ["#depoimentos", "Depoimentos"],
  ["#duvidas", "Dúvidas Frequentes"],
  ["#contato", "Localização"],
];

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-forest text-paper pt-12 pb-20 border-t border-rose/30">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-rose/30 text-sm">
          <div>
            <span className="font-fraunces text-xl font-normal block mb-1">{clinic.name}</span>
            <p className="text-paper/85 text-[13px] uppercase tracking-wider">{clinic.role}</p>
            <p className="text-sage text-[13px] font-medium mt-1">{clinic.crp}</p>
          </div>
          <div>
            <span className="font-fraunces text-base font-normal block mb-1 text-paper/90">
              Consultório Presencial
            </span>
            <p className="text-paper/85 text-[13px] leading-relaxed">
              {clinic.street} - {clinic.room}
              <br />
              {clinic.neighborhood}, Campinas - SP
            </p>
            <a
              href={clinic.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tap text-[13px] text-sage hover:underline mt-1 inline-block"
            >
              Ver no mapa ↗
            </a>
          </div>
          <div>
            <span className="font-fraunces text-base font-normal block mb-1 text-paper/90">
              Atendimento Online
            </span>
            <p className="text-paper/85 text-[13px] leading-relaxed">{clinic.contact.footerOnline}</p>
          </div>
        </div>

        <div className="py-3 flex flex-wrap gap-x-6 text-[13px] text-paper/85">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="py-3 hover:text-sage transition-colors">
              {label}
            </a>
          ))}
        </div>

        <div className="my-6 p-6 rounded-[28px] border border-sage/40 bg-moss/20">
          <p className="font-fraunces text-base text-sage mb-1 font-normal">Em caso de crise ou urgência</p>
          <p className="text-[13px] text-paper/85 leading-relaxed">{clinic.contact.crisis}</p>
        </div>

        <div className="pt-6 text-[13px] text-paper/85 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} · {clinic.name} · {clinic.crp} ·{" "}
            <span className="italic font-fraunces text-paper/85">Escuta clínica e psicanálise</span>
          </p>
          <p className="text-xs text-paper/85">
            {clinic.building}, {clinic.neighborhood}, Campinas — SP
          </p>
        </div>
      </div>
    </footer>
  );
}
