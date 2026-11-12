import Link from "next/link";
import { Clock, Gavel, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

const lances = [
  {
    id: "4928",
    produto: "Soja Grau A — 850 t",
    meuLance: "R$ 168,40 / sc",
    lanceAtual: "R$ 169,10 / sc",
    status: "Cobrir",
    statusTone: "warn" as const,
    timer: "02:14:08",
  },
  {
    id: "5102",
    produto: "Milho Grão — 400 t",
    meuLance: "R$ 72,80 / sc",
    lanceAtual: "R$ 72,80 / sc",
    status: "Ganhando",
    statusTone: "ok" as const,
    timer: "05:42:11",
  },
  {
    id: "4881",
    produto: "Café Arábica — 90 sc",
    meuLance: "R$ 1.120 / sc",
    lanceAtual: "R$ 1.145 / sc",
    status: "Superado",
    statusTone: "bad" as const,
    timer: "Encerrado",
  },
];

const toneClass = {
  ok: "bg-green-50 text-agronex-green",
  warn: "bg-amber-50 text-amber-700",
  bad: "bg-red-50 text-red-600",
};

export default function CompradorLancesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Meus lances</h1>
          <p className="mt-1 text-sm text-agronex-muted">
            Acompanhe posições ativas e oportunidades para cobrir
          </p>
        </div>
        <Button href="/comprador/leiloes" className="gap-2">
          <Gavel className="h-4 w-4" />
          Explorar leilões
        </Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase text-agronex-muted">
            Ativos
          </p>
          <p className="mt-2 text-2xl font-bold text-gray-900">2</p>
        </div>
        <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase text-agronex-muted">
            Ganhando
          </p>
          <p className="mt-2 text-2xl font-bold text-agronex-green">1</p>
        </div>
        <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase text-agronex-muted">
            Volume em disputa
          </p>
          <p className="mt-2 text-2xl font-bold text-gray-900">R$ 1,4 mi</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-agronex-border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-agronex-border bg-gray-50 text-left text-xs font-medium uppercase text-agronex-muted">
              <th className="px-5 py-3">Lote</th>
              <th className="px-5 py-3">Meu lance</th>
              <th className="px-5 py-3">Atual</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Tempo</th>
              <th className="px-5 py-3">Ação</th>
            </tr>
          </thead>
          <tbody>
            {lances.map((l) => (
              <tr
                key={l.id}
                className="border-b border-agronex-border last:border-0"
              >
                <td className="px-5 py-4">
                  <p className="font-medium text-gray-900">{l.produto}</p>
                  <p className="font-mono text-xs text-agronex-muted">#{l.id}</p>
                </td>
                <td className="px-5 py-4">{l.meuLance}</td>
                <td className="px-5 py-4 font-semibold text-agronex-green">
                  {l.lanceAtual}
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${toneClass[l.statusTone]}`}
                  >
                    {l.statusTone === "ok" && (
                      <TrendingUp className="h-3 w-3" />
                    )}
                    {l.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-1 text-agronex-muted">
                    <Clock className="h-3.5 w-3.5" />
                    {l.timer}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <Link
                    href={
                      l.id === "4928"
                        ? "/produtor/leiloes/4928"
                        : `/produtor/leiloes/lote/${l.id}`
                    }
                    className="text-sm font-semibold text-agronex-green hover:underline"
                  >
                    {l.status === "Cobrir" ? "Cobrir agora" : "Ver sala"}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
