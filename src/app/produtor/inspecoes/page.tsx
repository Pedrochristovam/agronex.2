import Link from "next/link";
import { Camera, Plus, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";

const minhasInspecoes = [
  {
    id: "INS-2401",
    lote: "Bovinos Nelore #45",
    modo: "Fotos remotas",
    status: "Em análise",
    data: "Hoje, 08:14",
  },
  {
    id: "INS-2388",
    lote: "Bezerros #12",
    modo: "Presencial",
    status: "Agendada",
    data: "16 Set, 09:00",
  },
  {
    id: "INS-2370",
    lote: "Vacas Primíparas #08",
    modo: "Fotos remotas",
    status: "Aprovada",
    data: "10 Set 2026",
  },
];

export default function ProdutorInspecoesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Inspeções veterinárias
          </h1>
          <p className="mt-1 text-sm text-agronex-muted">
            Solicite laudos por fotos ou visita para liberar lotes e GTA
          </p>
        </div>
        <Button href="/produtor/inspecoes/nova" className="gap-2">
          <Plus className="h-4 w-4" />
          Nova solicitação
        </Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
          <Camera className="h-5 w-5 text-agronex-green" />
          <h2 className="mt-3 font-semibold text-gray-900">Avaliação por fotos</h2>
          <p className="mt-1 text-sm text-agronex-muted">
            Envie imagens do rebanho. O veterinário emite parecer remoto.
          </p>
        </div>
        <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
          <Stethoscope className="h-5 w-5 text-agronex-green" />
          <h2 className="mt-3 font-semibold text-gray-900">Visita presencial</h2>
          <p className="mt-1 text-sm text-agronex-muted">
            Agende um profissional da rede para vistoria na fazenda.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-agronex-border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-agronex-border bg-gray-50 text-left text-xs font-medium uppercase text-agronex-muted">
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Lote</th>
              <th className="px-5 py-3">Modo</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Data</th>
            </tr>
          </thead>
          <tbody>
            {minhasInspecoes.map((i) => (
              <tr
                key={i.id}
                className="border-b border-agronex-border last:border-0"
              >
                <td className="px-5 py-4 font-mono text-xs">{i.id}</td>
                <td className="px-5 py-4 font-medium">{i.lote}</td>
                <td className="px-5 py-4">{i.modo}</td>
                <td className="px-5 py-4">{i.status}</td>
                <td className="px-5 py-4 text-agronex-muted">{i.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-center text-sm text-agronex-muted">
        Veterinário da rede?{" "}
        <Link href="/cadastro/veterinario" className="font-semibold text-agronex-green hover:underline">
          Cadastre-se como veterinário
        </Link>
      </p>
    </div>
  );
}
