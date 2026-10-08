// Todos os textos, preços, links e imagens do site ficam aqui.
// Para editar o site, mexa só neste arquivo.

export const clinic = {
  name: "Marina Rezze Barthelson",
  shortTitle: "Psicóloga · Psicanalista",
  role: "Psicóloga Clínica & Psicanalista",
  crp: "CRP 06/73918",
  city: "Campinas - SP",
  neighborhood: "Jardim Brasil",
  street: "Rua Clóvis Beviláqua, 185",
  room: "Sala 11",
  building: "Edifício Gemini I",
  postalCode: "13073-021",
  phone: "(19) 99126-0365",
  // Número do WhatsApp (só dígitos, com 55 + DDD). Usado em todos os botões "Agendar".
  whatsapp: "5519991260365",
  whatsappMessage:
    "Olá, Marina! Vim pelo site e gostaria de agendar uma consulta.",
  rating: "5.0",
  reviewCount: 5,
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Rua+Cl%C3%B3vis+Bevil%C3%A1qua+185+sala+11+Jardim+Brasil+Campinas+13073-021",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua+Cl%C3%B3vis+Bevil%C3%A1qua+185+sala+11+Campinas&z=16&output=embed",
  // Todos os botões "Agendar" abrem este link (perfil da Marina no Doctoralia)
  bookingUrl:
    "https://www.doctoralia.com.br/marina-rezze-barthelson/psicologo-psicanalista/campinas#address-id=1820418&is-online-only=true&filters%5Bspecializations%5D%5B%5D=75&filters%5Bonline_only%5D%5B%5D=true",
  links: {
    doctoralia: "",
    instagram: "",
    youtube: "",
  },

  // Imagens: para trocar por fotos originais, coloque os arquivos em public/img/
  // e troque aqui por "/img/nome-do-arquivo.jpg"
  images: {
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnPISxjZBgZYrNSR3Nydr_oDWypmC1eugcAbtZknVQVOw_roAggvybxZNChHImth-V_fii2FVwMboqImzUIDDuFec-Urp-Wn78muU_LpmoYRNfPTCkL18DhN66MPS1zo88b54RWkXSINdx1HxignJDXQCWeirWrVCGccQckgHoXCBM6nDTDlr70VT4Dp3nCUzMOZTvQ-QM5ysan1YFH-3ka6iutTLcx-W5KoOfgK3vCtMKtopMYg_y",
    portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz-jVnPmlT_pjA5fVA_Tp8DFBbu65nCNW92EpQgtqtRDnHMsqIpD6pdhjwBerBbsLhAAnMoqrtfwKV3QQkXiLuVOOTjc24lfdi_mhFi4Z_f_fdGYiT9twJcaXyJ3W_Udciyu-PYmpP9jdIyA9w1n9_xv7VMS70SpZ8RNqP0szFjHtHTRTge1icxyKcYv2VhZMXPqqlzzXezB9JCurvjhbRlPJHrz3w5YRVYqfh-w4X9lApByB1ea61",
    approach: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkY3hkfEVuEXz20IrR7saBzCXj4ryytdV7MIrfPh_EQaLatfSZVBYdmTCTOFu6ojDMSB4Upu295ah52E6IikIRL5sbOLufimsHXc4B_CX_6liBK6X7Syl6mainJe9Gv_5tS7wk_y8U5ISCiCq-VvICL4nzb3lwPWfmScJNZ-UFMv15Tn061zNyn7GBRnl7Py2a1qzl-egI1DHLyUTpTth3M85bQ6OmqOFJ4D4mUI0vvzd_VK1MAVVI",
  },

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Abordagem", href: "#como-trabalho" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#duvidas" },
  ],

  hero: {
    eyebrow: "Acolhimento · Presencial & Online",
    titleStart: "Psicoterapia para ",
    titleEmphasis: "compreender",
    titleEnd: " e transformar padrões emocionais",
    text: "Escuta ética e sensível fundamentada na psicanálise, construindo um espaço de elaboração emocional e cuidado para adolescentes, adultos e idosos.",
    cta: "Marcar primeira sessão",
    secondary: "Conhecer a abordagem",
  },

  forWhom: {
    label: "01 — Para quem é",
    titleStart: "Quando algo se repete e você ",
    titleEmphasis: "não entende",
    titleEnd: " por quê",
    text: "O sofrimento psíquico muitas vezes se manifesta em impasses que travam decisões, no cansaço que não passa ou em sintomas que o corpo expressa quando as palavras faltam.",
    quote:
      "A escuta clínica psicanalítica abre espaço para acolher o que é singular em cada pessoa e desatar nós emocionais no seu próprio tempo.",
    items: [
      {
        title: "Ansiedade e Angústia Constante",
        text: "Sensação persistente de alerta, aperto no peito, dificuldade para desacelerar o pensamento e medo difuso que compromete o descanso e a rotina.",
      },
      {
        title: "Depressão e Tristeza Prolongada",
        text: "Perda de vitalidade, sensação de vazio, desânimo diário para sustentar projetos pessoais e dificuldade de encontrar sentido nas atividades cotidianas.",
      },
      {
        title: "Síndrome de Burnout e Estresse no Trabalho",
        text: "Esgotamento emocional decorrente de exigências profissionais excessivas, perda de limites entre vida pessoal e trabalho, e sensação de sobrecarga mental crônica.",
      },
      {
        title: "Conflitos de Relacionamento e Vínculos",
        text: "Dificuldade em sustentar limites saudáveis, repetição de padrões afetivos dolorosos, processos de separação e inseguranças nas relações interpessoais e familiares.",
      },
      {
        title: "Conversões Somáticas e Sintomas Corporais",
        text: "Tensões, insônias e dores sem causa médica isolada, em que o corpo expressa e carrega tensões emocionais ainda não simbolizadas em palavras.",
      },
      {
        title: "Processos de Luto e Fases de Transição",
        text: "Elaboração de perdas afetivas, envelhecimento, mudanças de fase de vida ou crises existenciais que demandam reestruturação interna e novos caminhos.",
      },
    ],
  },

  about: {
    label: "02 — Sobre",
    titleStart: "Uma trajetória com rigor clínico e ",
    titleEmphasis: "sensibilidade",
    titleEnd: " humana",
    cardSubtitle: "Psicóloga · CRP 06/73918",
    cardEducation: "PUC-Campinas · Esp. Clínica em Psicanálise (CFP)",
    paragraphs: [
      "Sou psicóloga (CRP 06/73918) formada pela Pontifícia Universidade Católica de Campinas, com Título de Especialista em Psicologia Clínica de Orientação Psicanalítica reconhecido pelo Conselho Federal de Psicologia.",
      "Trabalho há mais de 20 anos em consultório particular atendendo adolescentes, adultos e idosos. Paralelamente, acumulei mais de duas décadas de experiência na rede pública de Saúde Mental (CAPS III, CAPS AD, Unidade Básica e Centros de Convivência), o que aprofundou meu manejo ético frente ao sofrimento psíquico e a situações complexas.",
      "Minha prática é pautada na psicanálise: uma escuta que respeita a singularidade e a história de cada pessoa, sem fórmulas prontas ou diagnósticos apressados.",
    ],
    quote:
      "Construir um espaço terapêutico é favorecer a elaboração emocional e a promoção da saúde mental no momento próprio de cada vida.",
    credentialsTitle: "Formação & Especializações Verificadas",
    credentials: [
      "Graduação em Psicologia (PUC-Campinas)",
      "Especialista em Psicol. Clínica / Psicanálise (CFP)",
      "Sociedade Brasileira de Psicanálise de Campinas",
      "Especialização em Psicanálise (CEFAS Campinas)",
      "Instrutora de Movimento Vital Expressivo & LianGong",
    ],
    cta: "Agendar uma conversa",
  },

  approach: {
    label: "03 — Abordagem",
    titleStart: "Clareza também é uma forma de ",
    titleEmphasis: "cuidado",
    titleEnd: ".",
    text: "A orientação psicanalítica propõe uma investigação cuidadosa sobre as razões inconscientes que sustentam nossos comportamentos, conflitos e angústias. Em vez de calar o sintoma, buscamos entender o que ele comunica.",
    highlight:
      "Atendimento individual focado na singularidade de cada pessoa, com respeito absoluto ao seu tempo de elaboração.",
    photoCaption: "Consultório Particular — Campinas, SP",
    pillars: [
      {
        n: "i.",
        title: "Escuta Qualificada",
        text: "Um ambiente onde todas as palavras são válidas. A fala livre permite que contradições e desejos silenciados ganhem contorno e possam ser pensados sem julgamento moral.",
      },
      {
        n: "ii.",
        title: "Elaboração Emocional",
        text: "Compreender as origens dos padrões repetitivos para deixar de reagir de forma automática. O paciente desenvolve autonomia para fazer escolhas mais conscientes.",
      },
      {
        n: "iii.",
        title: "Rigor Ético e Sigilo",
        text: "Prática amparada no Código de Ética Profissional do Psicólogo. Preservação irrestrita do sigilo clínico em sessões presenciais e na teleconsulta.",
      },
    ],
    changesLabel: "Transformação",
    changesTitle: "O que costuma mudar",
    changes: [
      "Maior tolerância e clareza diante das incertezas e frustrações",
      "Relações afetivas e familiares mais conscientes e menos reativas",
      "Capacidade de nomear e acolher sentimentos sem somatizar",
      "Construção de autonomia perante cobranças internas e externas",
    ],
    notLabel: "Rigor Ético",
    notTitle: "O que este trabalho não é",
    notItems: [
      "Não é aconselhamento diretivo ou manual de regras prontas sobre como viver",
      "Não faz promessas ilusórias de alívio instantâneo ou curas mágicas",
      "Não se baseia em julgamentos morais sobre escolhas e vivências",
    ],
    notFooter:
      "A psicanálise faz sentido para quem deseja se aprofundar em si mesmo com paciência, compromisso e responsabilidade subjetiva.",
  },

  steps: {
    label: "04 — Passo a passo",
    titleStart: "O percurso de início com ",
    titleEmphasis: "tranquilidade",
    text: "Entenda como se estabelece o primeiro contato até o início do acompanhamento terapêutico.",
    items: [
      {
        n: "01",
        title: "Primeiro Contato",
        text: "Você envia uma mensagem para solicitar informações e disponibilidade na agenda presencial ou online.",
      },
      {
        n: "02",
        title: "Horário e Formato",
        text: "Definição em comum acordo do melhor dia, horário e modalidade (consultório no Jardim Brasil ou teleconsulta).",
      },
      {
        n: "03",
        title: "Primeira Sessão",
        text: "Encontro inicial de 50 minutos para apresentar suas queixas, expectativas e conhecer a dinâmica da escuta.",
      },
      {
        n: "04",
        title: "Continuidade",
        text: "Alinhamento da frequência dos atendimentos semanais e início regular do trabalho analítico.",
      },
    ],
  },

  services: {
    label: "05 — Modalidades de atendimento",
    titleStart: "Formatos de ",
    titleEmphasis: "atendimento",
    text: "Atendimento particular para adolescentes, adultos e idosos. Forneço recibo para solicitação de reembolso junto ao plano de saúde.",
    cta: "Agendar",
    items: [
      {
        mode: "Presencial",
        icon: "pin",
        duration: "50 minutos",
        title: "Psicoterapia Presencial",
        text: "Atendimento clínico individual no consultório, com espaço privativo e confortável preparado para a escuta.",
        bullets: [
          "Adolescentes, adultos e idosos",
          "Jardim Brasil, Campinas/SP",
          "Recibo para reembolso emitido",
        ],
      },
      {
        mode: "Online",
        icon: "monitor",
        duration: "50 minutos",
        title: "Teleconsulta por Vídeo",
        text: "Sessão realizada por videochamada segura no Google Meet, mantendo o mesmo rigor e acolhimento do consultório.",
        bullets: [
          "Adultos e adolescentes",
          "Atendimento para todo o Brasil e exterior",
          "Recibo para reembolso emitido",
        ],
      },
      {
        mode: "Presencial / Online",
        icon: "pin-simple",
        duration: "50 minutos",
        title: "Primeira Consulta",
        text: "Sessão de acolhimento e escuta diagnóstica para compreender o motivo da busca e pactuar o enquadre analítico.",
        bullets: [
          "Avaliação inicial de demandas",
          "Pagamento facilitado via PIX",
          "Orientações detalhadas pré-sessão",
        ],
      },
    ],
  },

  testimonials: {
    label: "06 — Depoimentos",
    titleStart: "O que dizem os ",
    titleEmphasis: "pacientes",
    note: "Avaliações reais e auditadas de pessoas atendidas no consultório em Campinas e por teleconsulta.",
    badge: "Avaliação verificada",
    // coluna 1 e coluna 2 (a segunda fica levemente deslocada no desktop)
    columns: [
      [
        {
          text: "Marina é uma excelente psicóloga e uma profissional extremamente acolhedora. Em um momento muito desafiador da minha vida, ela me ajudou com empatia, sensibilidade e escuta atenta, trazendo novas perspectivas e ferramentas para enfrentar as situações de forma mais leve e consciente. Ao longo do acompanhamento, aprendi a lidar muito melhor com os desafios do dia a dia e a enxergar novos caminhos. Sou muito grata pelo cuidado, profissionalismo e dedicação.",
          author: "CEBK",
          meta: "Teleconsulta",
        },
        {
          text: "Ótima psicóloga e psicanalista, me acompanha há muitos anos e me ajudou a mudar muito. Competente e assertiva. Recomendo.",
          author: "Veridiana",
          meta: "Edifício Gemini I, Campinas",
        },
      ],
      [
        {
          text: "Marina é um profissional extremamente competente, gentil, solícita e nos deixa bastante confortáveis e à vontade durante as sessões. Recomendo de olhos fechados!",
          author: "Rodrigo",
          meta: "Psicoterapia Psicanalítica",
        },
        {
          text: "Excelente profissional, sabe ouvir, dialoga com muito conhecimento, me ajuda muito em meus problemas, Com certeza, confio muito na capacidade desta profissional, super indico.",
          author: "Jefferson",
          meta: "Teleconsulta",
        },
        {
          text: "Gosto muito do atendimento da Marina, passo com ela faz muito tempo e recomendo",
          author: "KMF",
          meta: "Edifício Gemini I, Campinas",
        },
      ],
    ],
  },

  faq: {
    label: "07 — Dúvidas",
    titleStart: "Perguntas ",
    titleEmphasis: "frequentes",
    text: "Algumas respostas diretas sobre o funcionamento das sessões, convênios médicos, sigilo e formatos de consulta.",
    cta: "Perguntar",
    items: [
      {
        q: "Como funciona a primeira consulta?",
        a: "A primeira sessão é um momento de escuta inicial. Nela, você relata o que o motivou a buscar terapia e conversamos sobre sua rotina e histórico. Também combinamos o formato de trabalho, frequência e alinhamos eventuais dúvidas sobre o método psicanalítico.",
      },
      {
        q: "Você atende por convênio médico?",
        a: "Os atendimentos são exclusivamente particulares. No entanto, forneço recibo detalhado com registro profissional (CRP) que permite ao paciente solicitar o reembolso junto ao seu plano de saúde de acordo com as regras de cada operadora.",
      },
      {
        q: "Qual a diferença entre a sessão online e a presencial?",
        a: "A eficácia e a profundidade da escuta são equivalentes. No presencial, o encontro acontece na sala em Campinas; no online, é necessário apenas que você esteja em um cômodo silencioso, privativo e com boa conexão de internet para que possa falar com total liberdade.",
      },
      {
        q: "Como é garantido o sigilo das conversas?",
        a: "O sigilo profissional é um preceito ético inegociável da prática psicológica, resguardado por lei pelo Código de Ética do Psicólogo. Tudo o que é compartilhado em sessão permanece estritamente confidencial.",
      },
      {
        q: "Qual é a duração da sessão e a frequência?",
        a: "As sessões têm duração padrão de 50 minutos. A frequência regular recomendada é semanal, o que viabiliza a continuidade do vínculo clínico e o aprofundamento do processo terapêutico.",
      },
      {
        q: "Quais métodos de pagamento são aceitos?",
        a: "O pagamento das consultas particulares pode ser realizado diretamente via PIX ou por meio da plataforma Doctoralia. O comprovante é emitido logo após a realização.",
      },
    ],
  },

  contact: {
    label: "08 — Atendimento e localização",
    titleStart: "Comece por uma ",
    titleEmphasis: "conversa",
    text: "Dê o primeiro passo para cuidar do que incomoda. As sessões podem ser agendadas presencialmente em Campinas ou por teleconsulta de qualquer localidade.",
    cta: "Agendar Consulta",
    onlineText:
      "Teleconsulta para todo o Brasil e brasileiros no exterior via Google Meet.",
    onlineNote: "Link enviado 10 minutos antes da sessão via WhatsApp.",
    footerOnline:
      "Teleconsultas semanais com link privativo enviado previamente por WhatsApp para todo o Brasil.",
    crisis:
      "Este atendimento não é voltado para situações de emergência médica imediata. Em caso de crise aguda, procure o CVV (Centro de Valorização da Vida) pelo número 188 (gratuito e 24 horas), ou o SAMU pelo 192.",
  },
};

export type Clinic = typeof clinic;
