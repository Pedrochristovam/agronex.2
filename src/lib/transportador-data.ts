export const transportadorKpis = [
  { label: "Fretes Disponíveis", value: "12", hint: "Na sua região" },
  { label: "Cargas Ativas", value: "3", hint: "1 em coleta" },
  { label: "Entregas no Mês", value: "18", hint: "+4 vs. mês ant." },
  { label: "Receita Estimada", value: "R$ 86,4 mil", hint: "Fretes aceitos" },
];

export const fretesDisponiveis = [
  {
    id: "FRT-9042",
    slug: "frt-9042",
    produto: "Soja Grau A — 500 t",
    origem: "Patos de Minas, MG",
    destino: "Santos, SP",
    distancia: "680 km",
    valorFrete: "R$ 4.500,00",
    coleta: "05 Set, 06:00",
    prazo: "48h",
    modalidade: "Carreta Graneleira",
    status: "aberto",
  },
  {
    id: "FRT-9048",
    slug: "frt-9048",
    produto: "Milho Grão — 800 t",
    origem: "Uberaba, MG",
    destino: "Ribeirão Preto, SP",
    distancia: "210 km",
    valorFrete: "R$ 2.100,00",
    coleta: "06 Set, 07:30",
    prazo: "24h",
    modalidade: "Bitrem",
    status: "aberto",
  },
  {
    id: "FRT-9051",
    slug: "frt-9051",
    produto: "Café Arábica — 300 sc",
    origem: "Patrocínio, MG",
    destino: "Guarulhos, SP",
    distancia: "520 km",
    valorFrete: "R$ 3.200,00",
    coleta: "07 Set, 08:00",
    prazo: "36h",
    modalidade: "Truck baú",
    status: "aberto",
  },
];

export const cargasAtivas = [
  {
    id: "LOG-8492-SP",
    produto: "Soja Premium — 500 t",
    status: "Em trânsito",
    progresso: 62,
    origem: "Patos de Minas, MG",
    destino: "Santos, SP",
    veiculo: "ABC1D23",
    eta: "Amanhã, 14:00",
  },
  {
    id: "LOG-8501-MG",
    produto: "Milho — 200 t",
    status: "Coleta agendada",
    progresso: 15,
    origem: "Araxá, MG",
    destino: "Uberlândia, MG",
    veiculo: "DEF4G56",
    eta: "Hoje, 18:00",
  },
];

export const frota = [
  {
    placa: "ABC1D23",
    tipo: "Carreta Graneleira",
    capacidade: "45 t",
    status: "Em rota",
    motorista: "Carlos Mendes",
  },
  {
    placa: "DEF4G56",
    tipo: "Bitrem",
    capacidade: "57 t",
    status: "Disponível",
    motorista: "Paulo Henrique",
  },
  {
    placa: "GHI7J89",
    tipo: "Truck baú",
    capacidade: "14 t",
    status: "Manutenção",
    motorista: "—",
  },
];
