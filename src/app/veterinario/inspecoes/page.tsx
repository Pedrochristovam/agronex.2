import Link from "next/link";
import { Camera, MapPin } from "lucide-react";
import { inspecoesPendentes } from "@/lib/veterinario-data";

const statusStyle: Record<string, string> = {
  pendente: "bg-orange-50 text-orange-700",
  "em-analise": "bg-blue-50 text-blue-700",
  presencial: "bg-purple-50 text-purple-700",
  aprovado: "bg-green-50 text-green-700",
  reprovado: "bg-red-50 text-red-700",
};

const statusLabel: Record<string, string> = {
  pendente: "Pendente",
  "em-analise": "Em análise",
  presencial: "Presencial",
  aprovado: "Aprovado",
  reprovado: "Reprovado",
};

export default function InspecoesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Inspeções</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Filas de avaliação remota (fotos) e visitas presenciais
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-agronex-border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-agronex-border bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-agronex-muted">
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Lote</th>
              <th className="px-5 py-3">Modo</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Solicitado</th>
              <th className="px-5 py-3">Ação</th>
            </tr>
          </thead>
          <tbody>
            {inspecoesPendentes.map((ins) => (
              <tr
                key={ins.id}
                className="border-b border-agronex-border last:border-0 hover:bg-gray-50"
              >
                <td className="px-5 py-4 font-mono text-xs">{ins.id}</td>
                <td className="px-5 py-4">
                  <p className="font-medium text-gray-900">{ins.lote}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-agronex-muted">
                    <MapPin className="h-3 w-3" />
                    {ins.produtor}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-1 text-xs">
                    {ins.modo.includes("Foto") && (
                      <Camera className="h-3.5 w-3.5 text-agronex-green" />
                    )}
                    {ins.modo}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyle[ins.status]}`}
                  >
                    {statusLabel[ins.status]}
                  </span>
                </td>
                <td className="px-5 py-4 text-agronex-muted">
                  {ins.solicitadoEm}
                </td>
                <td className="px-5 py-4">
                  <Link
                    href={`/veterinario/inspecoes/${ins.slug}`}
                    className="text-xs font-semibold text-agronex-green hover:underline"
                  >
                    Analisar
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
