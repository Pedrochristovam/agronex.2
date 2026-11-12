import Link from "next/link";
import { Truck } from "lucide-react";

export default function CompradorLogisticaPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Entregas</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Acompanhe o transporte dos lotes comprados
        </p>
      </div>

      <div className="rounded-xl border border-agronex-border bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
            <Truck className="h-6 w-6 text-agronex-green" />
          </div>
          <div>
            <p className="font-mono text-xs text-agronex-muted">LOG-8492-SP</p>
            <h2 className="font-bold text-gray-900">Soja Grau A — 500 t</h2>
            <p className="mt-1 text-sm text-agronex-muted">
              Patos de Minas, MG → Santos, SP · Em trânsito (62%)
            </p>
            <Link
              href="/produtor/logistica/rastreamento/log-8492-sp"
              className="mt-3 inline-block text-sm font-semibold text-agronex-green hover:underline"
            >
              Abrir rastreamento →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
