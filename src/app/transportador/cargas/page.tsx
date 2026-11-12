import { Truck } from "lucide-react";
import { cargasAtivas } from "@/lib/transportador-data";

export default function CargasPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Minhas cargas</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Fretes aceitos e status operacional
        </p>
      </div>

      <div className="space-y-4">
        {cargasAtivas.map((c) => (
          <div
            key={c.id}
            className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-xs text-agronex-muted">{c.id}</p>
                <h2 className="font-bold text-gray-900">{c.produto}</h2>
                <p className="mt-1 text-sm text-agronex-muted">
                  {c.origem} → {c.destino}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-agronex-green">
                <Truck className="h-3.5 w-3.5" />
                {c.status}
              </span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-agronex-green"
                style={{ width: `${c.progresso}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-agronex-muted">
              Veículo {c.veiculo} · ETA {c.eta} · {c.progresso}% concluído
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
