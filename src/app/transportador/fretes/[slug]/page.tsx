import Link from "next/link";
import { ArrowLeft, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fretesDisponiveis } from "@/lib/transportador-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function FreteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const frete =
    fretesDisponiveis.find((f) => f.slug === slug) ?? fretesDisponiveis[0];

  return (
    <div className="p-6 lg:p-8">
      <Link
        href="/transportador/fretes"
        className="mb-4 inline-flex items-center gap-1 text-sm text-agronex-green hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar aos fretes
      </Link>

      <div className="mx-auto max-w-2xl rounded-xl border border-agronex-border bg-white p-6 shadow-sm">
        <p className="font-mono text-xs text-agronex-muted">{frete.id}</p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900">{frete.produto}</h1>
        <p className="mt-2 flex items-center gap-1 text-sm text-agronex-muted">
          <MapPin className="h-4 w-4 text-agronex-green" />
          {frete.origem} → {frete.destino} ({frete.distancia})
        </p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Valor do frete", frete.valorFrete],
            ["Modalidade", frete.modalidade],
            ["Coleta prevista", frete.coleta],
            ["Prazo de entrega", frete.prazo],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-gray-50 p-3">
              <dt className="text-xs text-agronex-muted">{k}</dt>
              <dd className="mt-1 font-semibold text-gray-900">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900">
          Após aceitar, a carga entra em &quot;Minhas Cargas&quot; e o produtor /
          comprador acompanham o rastreamento em tempo real.
        </div>

        <div className="mt-6 flex gap-3">
          <Button href="/transportador/cargas" className="gap-2">
            <Truck className="h-4 w-4" />
            Aceitar frete
          </Button>
          <Button variant="secondary" href="/transportador/fretes">
            Recusar
          </Button>
        </div>
      </div>
    </div>
  );
}
