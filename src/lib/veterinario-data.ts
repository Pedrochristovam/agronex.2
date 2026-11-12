export type InspectionStatus =
  | "pendente"
  | "em-analise"
  | "aprovado"
  | "reprovado"
  | "presencial";

export const veterinarioKpis = [
  { label: "Inspeções Pendentes", value: "8", hint: "3 urgentes" },
  { label: "Laudos Emitidos (mês)", value: "24", hint: "+6 vs. mês ant." },
  { label: "Avaliações Presenciais", value: "5", hint: "2 agendadas" },
  { label: "Taxa de Aprovação", value: "91%", hint: "Últimos 30 dias" },
];

export const inspecoesPendentes = [
  {
    id: "INS-2401",
    slug: "ins-2401",
    lote: "Lote Bovinos Nelore #45",
    produtor: "Fazenda Boa Vista — Patos de Minas, MG",
    tipo: "GTA / Trânsito",
    modo: "Fotos remotas",
    status: "pendente" as InspectionStatus,
    solicitadoEm: "Hoje, 08:14",
    fotos: 6,
  },
  {
    id: "INS-2398",
    slug: "ins-2398",
    lote: "Lote Bezerros Desmama #12",
    produtor: "Fazenda Alvorada — Uberaba, MG",
    tipo: "Pré-leilão",
    modo: "Presencial",
    status: "presencial" as InspectionStatus,
    solicitadoEm: "Ontem, 16:40",
    fotos: 0,
  },
  {
    id: "INS-2395",
    slug: "ins-2395",
    lote: "Lote Vacas Primíparas #08",
    produtor: "Sítio Recanto — Araxá, MG",
    tipo: "Saúde geral",
    modo: "Fotos remotas",
    status: "em-analise" as InspectionStatus,
    solicitadoEm: "14 Set, 11:20",
    fotos: 9,
  },
];

export const inspecaoDetail = {
  id: "INS-2401",
  lote: "Lote Bovinos Nelore #45",
  produtor: "João Silva — Fazenda Boa Vista",
  local: "Patos de Minas, MG",
  quantidade: "120 cabeças",
  tipo: "Inspeção pré-trânsito (GTA)",
  modo: "Avaliação por fotos",
  status: "pendente" as InspectionStatus,
  checklist: [
    "Condição corporal aparente",
    "Ausência de lesões visíveis",
    "Identificação individual (brinco)",
    "Ambiente / instalação sanitária",
    "Documentação sanitária anexada",
  ],
  fotos: [
    "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80",
    "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&q=80",
    "https://images.unsplash.com/photo-1527156231396-d84885bc6d3c?w=600&q=80",
  ],
  observacoesProdutor:
    "Lote destinado a leilão. Necessário laudo para emissão de GTA e liberação logística.",
};

export const agendaVeterinario = [
  {
    data: "16 Set — 09:00",
    local: "Fazenda Alvorada, Uberaba/MG",
    lote: "Bezerros Desmama #12",
    tipo: "Visita presencial",
  },
  {
    data: "17 Set — 14:30",
    local: "Remoto (videoconferência)",
    lote: "Vacas Primíparas #08",
    tipo: "Revisão de laudo",
  },
  {
    data: "18 Set — 10:00",
    local: "Fazenda Boa Vista, Patos de Minas/MG",
    lote: "Bovinos Nelore #45",
    tipo: "Coleta / vistoria",
  },
];

export const laudosRecentes = [
  {
    id: "LAU-8821",
    lote: "Nelore PO #33",
    resultado: "Aprovado",
    data: "12 Set 2026",
  },
  {
    id: "LAU-8814",
    lote: "Bezerras #07",
    resultado: "Aprovado com ressalvas",
    data: "10 Set 2026",
  },
  {
    id: "LAU-8809",
    lote: "Touros Reprodutores #02",
    resultado: "Reprovado",
    data: "08 Set 2026",
  },
];
