import type { Clinic } from "./data/clinic";

// Dados estruturados (schema.org) gerados a partir de clinic.ts na hora do build.
export function buildJsonLd(c: Clinic) {
  const address = {
    "@type": "PostalAddress",
    streetAddress: `${c.street}, ${c.room} - ${c.building}, ${c.neighborhood}`,
    addressLocality: "Campinas",
    addressRegion: "SP",
    postalCode: c.postalCode,
    addressCountry: "BR",
  };
  const profile = c.bookingUrl.split("#")[0];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${c.siteUrl}/#website`,
        url: `${c.siteUrl}/`,
        name: c.name,
        inLanguage: "pt-BR",
      },
      {
        "@type": "Person",
        "@id": `${c.siteUrl}/#person`,
        name: c.name,
        jobTitle: "Psicóloga e Psicanalista",
        identifier: c.crp,
        url: `${c.siteUrl}/`,
        image: `${c.siteUrl}/og.jpg`,
        telephone: c.phoneTel,
        sameAs: [profile],
        alumniOf: "Pontifícia Universidade Católica de Campinas",
        knowsAbout: [
          "Psicanálise",
          "Psicoterapia",
          "Ansiedade",
          "Depressão",
          "Burnout",
          "Luto",
        ],
        address,
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${c.siteUrl}/#consultorio`,
        name: `Consultório de Psicologia e Psicanálise ${c.name}`,
        url: `${c.siteUrl}/`,
        image: `${c.siteUrl}/og.jpg`,
        telephone: c.phoneTel,
        address,
        areaServed: ["Campinas", "Brasil"],
        founder: { "@id": `${c.siteUrl}/#person` },
        sameAs: [profile],
      },
      {
        "@type": "FAQPage",
        mainEntity: c.faq.items.map((i) => ({
          "@type": "Question",
          name: i.q,
          acceptedAnswer: { "@type": "Answer", text: i.a },
        })),
      },
    ],
  };
}
