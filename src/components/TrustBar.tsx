import { clinic } from "../data/clinic";
import { ShieldCheck, StarOutline, MapPin, Monitor } from "./Icons";

export default function TrustBar() {
  const items = [
    { icon: <ShieldCheck />, label: "Registro Ativo", value: clinic.crp },
    {
      icon: <StarOutline />,
      label: "Avaliações",
      value: `Nota ${clinic.rating} (${clinic.reviewCount} no Doctoralia)`,
    },
    { icon: <MapPin />, label: "Presencial", value: "Jd. Brasil, Campinas" },
    { icon: <Monitor className="w-5 h-5" />, label: "Teleconsulta", value: "Atendimento por Vídeo" },
  ];
  return (
    <section className="bg-paper py-10 border-b border-rose/40">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((i) => (
            <div key={i.label} className="flex items-center space-x-3.5">
              <div className="p-2.5 rounded-full bg-blush-deep/70 text-moss shrink-0">{i.icon}</div>
              <div>
                <p className="text-xs text-moss uppercase tracking-wider font-medium">{i.label}</p>
                <p className="font-fraunces text-base text-ink font-normal">{i.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
