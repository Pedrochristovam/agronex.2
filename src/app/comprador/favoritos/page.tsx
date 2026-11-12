import Link from "next/link";
import { Heart, MapPin, Star } from "lucide-react";
import { auctionCards } from "@/lib/leiloes-data";

const produtores = [
  {
    nome: "Fazenda Boa Vista",
    local: "Patos de Minas, MG",
    rating: "4,9",
    produtos: "Soja · Milho",
  },
  {
    nome: "Cooperativa Vale do Rio",
    local: "Uberaba, MG",
    rating: "4,7",
    produtos: "Milho · Café",
  },
];

export default function CompradorFavoritosPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Favoritos</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Leilões e produtores salvos para acompanhamento rápido
        </p>
      </div>

      <section className="mb-8">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-agronex-muted">
          <Heart className="h-4 w-4 text-agronex-green" />
          Leilões salvos
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {auctionCards.slice(0, 3).map((a) => (
            <Link
              key={a.id}
              href={`/produtor/leiloes/lote/${a.id}`}
              className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm transition hover:border-agronex-green"
            >
              <p className="font-mono text-xs text-agronex-muted">#{a.id}</p>
              <p className="mt-1 font-bold text-gray-900">{a.title}</p>
              <p className="mt-2 flex items-center gap-1 text-sm text-agronex-muted">
                <MapPin className="h-3.5 w-3.5 text-agronex-green" />
                {a.location}
              </p>
              <p className="mt-3 text-lg font-bold text-agronex-green">
                {a.currentBid}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-agronex-muted">
          <Star className="h-4 w-4 text-agronex-green" />
          Produtores
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {produtores.map((p) => (
            <div
              key={p.nome}
              className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-gray-900">{p.nome}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-agronex-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.local}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">{p.produtos}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-agronex-green">
                  <Star className="h-3 w-3 fill-current" />
                  {p.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
