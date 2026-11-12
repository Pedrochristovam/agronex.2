import Link from "next/link";
import {
  Clock,
  Gavel,
  MapPin,
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { auctionCards } from "@/lib/leiloes-data";

const kpis = [
  { label: "Lances ativos", value: "5", hint: "2 ganhando" },
  { label: "Pedidos em andamento", value: "3", hint: "1 em trânsito" },
  { label: "Volume comprado (mês)", value: "R$ 2,1 mi", hint: "+18%" },
  { label: "Fornecedores", value: "14", hint: "Verificados" },
];

const pedidosRecentes = [
  {
    id: "AGX-9042",
    produto: "Soja Grau A — 500 t",
    status: "Em trânsito",
    valor: "R$ 84.725",
  },
  {
    id: "AGX-9011",
    produto: "Milho Grão — 200 t",
    status: "Pagamento retido",
    valor: "R$ 22.300",
  },
];

export default function CompradorVisaoGeralPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Painel do Comprador
          </h1>
          <p className="mt-1 text-sm text-agronex-muted">
            Acompanhe leilões, lances e pedidos de compra
          </p>
        </div>
        <Button href="/comprador/leiloes" className="gap-2">
          <Gavel className="h-4 w-4" />
          Ir para leilões
        </Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-medium uppercase text-agronex-muted">
              {kpi.label}
            </p>
            <p className="mt-2 text-2xl font-bold text-gray-900">{kpi.value}</p>
            <p className="mt-1 text-xs text-agronex-muted">{kpi.hint}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-agronex-border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-agronex-border px-5 py-4">
            <h2 className="font-semibold">Leilões em destaque</h2>
            <Link
              href="/comprador/leiloes"
              className="text-sm font-medium text-agronex-green hover:underline"
            >
              Ver todos
            </Link>
          </div>
          <div className="divide-y divide-agronex-border">
            {auctionCards.slice(0, 3).map((a) => (
              <Link
                key={a.id}
                href={`/produtor/leiloes/lote/${a.id}`}
                className="block px-5 py-4 hover:bg-gray-50"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-gray-900">{a.title}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-agronex-muted">
                      <MapPin className="h-3 w-3" />
                      {a.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600">
                    <Clock className="h-3 w-3" />
                    {a.timer}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-agronex-green">
                  {a.currentBid}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-agronex-border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-agronex-border px-5 py-4">
            <h2 className="font-semibold">Lances recentes</h2>
            <Link
              href="/comprador/lances"
              className="text-sm font-medium text-agronex-green hover:underline"
            >
              Ver todos
            </Link>
          </div>
          <div className="divide-y divide-agronex-border">
            {pedidosRecentes.map((p) => (
              <div key={p.id} className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="font-mono text-xs text-agronex-muted">{p.id}</p>
                  <p className="font-medium text-gray-900">{p.produto}</p>
                  <p className="text-xs text-agronex-muted">{p.status}</p>
                </div>
                <p className="font-semibold text-gray-900">{p.valor}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 border-t border-agronex-border p-4">
            <Link
              href="/comprador/lances"
              className="flex items-center justify-center gap-2 rounded-lg border border-agronex-border py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              <TrendingUp className="h-4 w-4 text-agronex-green" />
              Lances
            </Link>
            <Link
              href="/comprador/pedidos"
              className="flex items-center justify-center gap-2 rounded-lg border border-agronex-border py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              <ShoppingCart className="h-4 w-4 text-agronex-green" />
              Pedidos
            </Link>
            <Link
              href="/comprador/logistica"
              className="flex items-center justify-center gap-2 rounded-lg border border-agronex-border py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              <Package className="h-4 w-4 text-agronex-green" />
              Entregas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
