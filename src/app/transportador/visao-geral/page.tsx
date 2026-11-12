import Link from "next/link";
import { MapPin, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  cargasAtivas,
  fretesDisponiveis,
  transportadorKpis,
} from "@/lib/transportador-data";

export default function TransportadorVisaoGeralPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Painel do Transportador
          </h1>
          <p className="mt-1 text-sm text-agronex-muted">
            Fretes de lotes leiloados, cargas em andamento e frota
          </p>
        </div>
        <Button href="/transportador/fretes" className="gap-2">
          <Package className="h-4 w-4" />
          Ver fretes disponíveis
        </Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {transportadorKpis.map((kpi) => (
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
            <h2 className="font-semibold">Fretes em destaque</h2>
            <Link
              href="/transportador/fretes"
              className="text-sm font-medium text-agronex-green hover:underline"
            >
              Ver todos
            </Link>
          </div>
          <div className="divide-y divide-agronex-border">
            {fretesDisponiveis.slice(0, 2).map((f) => (
              <Link
                key={f.id}
                href={`/transportador/fretes/${f.slug}`}
                className="block px-5 py-4 hover:bg-gray-50"
              >
                <p className="font-medium text-gray-900">{f.produto}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-agronex-muted">
                  <MapPin className="h-3 w-3" />
                  {f.origem} → {f.destino}
                </p>
                <p className="mt-2 text-sm font-semibold text-agronex-green">
                  {f.valorFrete}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-agronex-border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-agronex-border px-5 py-4">
            <h2 className="font-semibold">Cargas ativas</h2>
            <Link
              href="/transportador/cargas"
              className="text-sm font-medium text-agronex-green hover:underline"
            >
              Ver todas
            </Link>
          </div>
          <div className="divide-y divide-agronex-border">
            {cargasAtivas.map((c) => (
              <div key={c.id} className="px-5 py-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-gray-900">{c.produto}</p>
                    <p className="text-xs text-agronex-muted">
                      {c.id} · {c.veiculo}
                    </p>
                  </div>
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-agronex-green">
                    {c.status}
                  </span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-agronex-green"
                    style={{ width: `${c.progresso}%` }}
                  />
                </div>
                <p className="mt-2 flex items-center gap-1 text-xs text-agronex-muted">
                  <Truck className="h-3 w-3" />
                  ETA {c.eta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
