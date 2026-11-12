import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fretesDisponiveis } from "@/lib/transportador-data";

export default function FretesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Fretes disponíveis</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Oportunidades de transporte após leilões e pedidos confirmados
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {fretesDisponiveis.map((f) => (
          <article
            key={f.id}
            className="flex flex-col rounded-xl border border-agronex-border bg-white p-5 shadow-sm"
          >
            <p className="font-mono text-xs text-agronex-muted">{f.id}</p>
            <h2 className="mt-1 font-bold text-gray-900">{f.produto}</h2>
            <p className="mt-2 flex items-start gap-1 text-sm text-agronex-muted">
              <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-agronex-green" />
              {f.origem} → {f.destino}
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div>
                <dt className="text-xs text-agronex-muted">Distância</dt>
                <dd className="font-medium">{f.distancia}</dd>
              </div>
              <div>
                <dt className="text-xs text-agronex-muted">Modalidade</dt>
                <dd className="font-medium">{f.modalidade}</dd>
              </div>
              <div>
                <dt className="text-xs text-agronex-muted">Coleta</dt>
                <dd className="font-medium">{f.coleta}</dd>
              </div>
              <div>
                <dt className="text-xs text-agronex-muted">Prazo</dt>
                <dd className="font-medium">{f.prazo}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xl font-bold text-agronex-green">
              {f.valorFrete}
            </p>
            <div className="mt-auto flex gap-2 pt-4">
              <Link
                href={`/transportador/fretes/${f.slug}`}
                className="flex-1 rounded-lg border border-agronex-border py-2 text-center text-sm font-semibold hover:bg-gray-50"
              >
                Detalhes
              </Link>
              <Button href={`/transportador/fretes/${f.slug}`} className="flex-1">
                Aceitar
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
