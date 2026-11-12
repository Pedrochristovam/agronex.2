import { FileText } from "lucide-react";
import { laudosRecentes } from "@/lib/veterinario-data";

export default function LaudosPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Laudos</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Histórico de laudos emitidos na plataforma
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-agronex-border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-agronex-border bg-gray-50 text-left text-xs font-medium uppercase text-agronex-muted">
              <th className="px-5 py-3">Laudo</th>
              <th className="px-5 py-3">Lote</th>
              <th className="px-5 py-3">Resultado</th>
              <th className="px-5 py-3">Data</th>
            </tr>
          </thead>
          <tbody>
            {laudosRecentes.map((l) => (
              <tr
                key={l.id}
                className="border-b border-agronex-border last:border-0"
              >
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-2 font-mono text-xs">
                    <FileText className="h-4 w-4 text-agronex-green" />
                    {l.id}
                  </span>
                </td>
                <td className="px-5 py-4 font-medium">{l.lote}</td>
                <td className="px-5 py-4">{l.resultado}</td>
                <td className="px-5 py-4 text-agronex-muted">{l.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
