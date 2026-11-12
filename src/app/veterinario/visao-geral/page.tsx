import Link from "next/link";
import {
  Calendar,
  Camera,
  ClipboardCheck,
  FileText,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  agendaVeterinario,
  inspecoesPendentes,
  veterinarioKpis,
} from "@/lib/veterinario-data";

const statusLabel: Record<string, string> = {
  pendente: "Pendente",
  "em-analise": "Em análise",
  presencial: "Presencial",
  aprovado: "Aprovado",
  reprovado: "Reprovado",
};

export default function VeterinarioVisaoGeralPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Painel Veterinário
          </h1>
          <p className="mt-1 text-sm text-agronex-muted">
            Avalie a saúde dos lotes por fotos ou visita presencial e emita
            laudos para liberar leilões e trânsito.
          </p>
        </div>
        <div className="flex gap-2">
          <Button href="/veterinario/agenda" variant="secondary" className="gap-2">
            <Calendar className="h-4 w-4" />
            Agenda
          </Button>
          <Button href="/veterinario/inspecoes" className="gap-2">
            <ClipboardCheck className="h-4 w-4" />
            Inspeções
          </Button>
        </div>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {veterinarioKpis.map((kpi) => (
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

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-xl border border-agronex-border bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-agronex-border px-5 py-4">
              <h2 className="font-semibold text-gray-900">
                Inspeções aguardando análise
              </h2>
              <Link
                href="/veterinario/inspecoes"
                className="text-sm font-medium text-agronex-green hover:underline"
              >
                Ver todas
              </Link>
            </div>
            <div className="divide-y divide-agronex-border">
              {inspecoesPendentes.map((ins) => (
                <Link
                  key={ins.id}
                  href={`/veterinario/inspecoes/${ins.slug}`}
                  className="flex flex-col gap-2 px-5 py-4 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-gray-900">{ins.lote}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-agronex-muted">
                      <MapPin className="h-3 w-3" />
                      {ins.produtor}
                    </p>
                    <p className="mt-1 text-xs text-agronex-muted">
                      {ins.tipo} · {ins.modo}
                      {ins.fotos > 0 && ` · ${ins.fotos} fotos`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700">
                      {statusLabel[ins.status]}
                    </span>
                    <span className="text-xs text-agronex-muted">
                      {ins.solicitadoEm}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Camera className="h-4 w-4 text-agronex-green" />
              <h2 className="font-semibold text-gray-900">Como funciona</h2>
            </div>
            <ol className="space-y-3 text-sm text-agronex-muted">
              <li>
                <strong className="text-gray-900">1.</strong> Produtor solicita
                inspeção do lote (fotos ou visita).
              </li>
              <li>
                <strong className="text-gray-900">2.</strong> Você analisa imagens
                ou agenda visita presencial.
              </li>
              <li>
                <strong className="text-gray-900">3.</strong> Emite laudo e libera
                (ou bloqueia) leilão / GTA / logística.
              </li>
            </ol>
          </div>

          <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-agronex-green" />
              <h2 className="font-semibold text-gray-900">Próximos na agenda</h2>
            </div>
            <div className="space-y-3">
              {agendaVeterinario.slice(0, 3).map((item) => (
                <div key={item.data} className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-agronex-green">
                    {item.data}
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {item.lote}
                  </p>
                  <p className="text-xs text-agronex-muted">
                    {item.tipo} · {item.local}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/veterinario/laudos"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-agronex-green hover:underline"
            >
              <FileText className="h-3.5 w-3.5" />
              Ver laudos recentes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
