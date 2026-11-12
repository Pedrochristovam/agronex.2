import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { auctionCards } from "@/lib/leiloes-data";

export default function CompradorLeiloesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Leilões disponíveis</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Pregões abertos para compra de commodities
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {auctionCards.map((a) => (
          <article
            key={a.id}
            className="flex flex-col rounded-xl border border-agronex-border bg-white p-5 shadow-sm"
          >
            <p className="font-mono text-xs text-agronex-muted">#{a.id}</p>
            <h2 className="mt-1 font-bold text-gray-900">{a.title}</h2>
            <p className="mt-2 flex items-center gap-1 text-sm text-agronex-muted">
              <MapPin className="h-3.5 w-3.5 text-agronex-green" />
              {a.location}
            </p>
            <p className="mt-1 text-sm text-agronex-muted">Volume: {a.volume}</p>
            <p className="mt-4 text-xl font-bold text-agronex-green">
              {a.currentBid}
            </p>
            <p className="text-xs text-agronex-muted">Encerra em {a.timer}</p>
            <div className="mt-auto flex gap-2 pt-4">
              <Link
                href={`/produtor/leiloes/lote/${a.id}`}
                className="flex-1 rounded-lg border border-agronex-border py-2 text-center text-sm font-semibold hover:bg-gray-50"
              >
                Detalhes
              </Link>
              <Button
                href={
                  a.id === "4928"
                    ? "/produtor/leiloes/4928"
                    : `/produtor/leiloes/lote/${a.id}`
                }
                className="flex-1"
              >
                Dar lance
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
