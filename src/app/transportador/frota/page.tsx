import { frota } from "@/lib/transportador-data";

const statusStyle: Record<string, string> = {
  "Em rota": "bg-blue-50 text-blue-700",
  Disponível: "bg-green-50 text-green-700",
  Manutenção: "bg-orange-50 text-orange-700",
};

export default function FrotaPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Frota</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Veículos cadastrados e disponibilidade
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-agronex-border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-agronex-border bg-gray-50 text-left text-xs font-medium uppercase text-agronex-muted">
              <th className="px-5 py-3">Placa</th>
              <th className="px-5 py-3">Tipo</th>
              <th className="px-5 py-3">Capacidade</th>
              <th className="px-5 py-3">Motorista</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {frota.map((v) => (
              <tr
                key={v.placa}
                className="border-b border-agronex-border last:border-0"
              >
                <td className="px-5 py-4 font-mono font-semibold">{v.placa}</td>
                <td className="px-5 py-4">{v.tipo}</td>
                <td className="px-5 py-4">{v.capacidade}</td>
                <td className="px-5 py-4">{v.motorista}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyle[v.status]}`}
                  >
                    {v.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
