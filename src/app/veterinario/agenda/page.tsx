import { Calendar, MapPin } from "lucide-react";
import { agendaVeterinario } from "@/lib/veterinario-data";

export default function AgendaVeterinarioPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Agenda</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Visitas presenciais e revisões remotas agendadas
        </p>
      </div>

      <div className="mx-auto max-w-2xl space-y-3">
        {agendaVeterinario.map((item) => (
          <div
            key={item.data}
            className="flex gap-4 rounded-xl border border-agronex-border bg-white p-5 shadow-sm"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-50">
              <Calendar className="h-5 w-5 text-agronex-green" />
            </div>
            <div>
              <p className="text-sm font-semibold text-agronex-green">
                {item.data}
              </p>
              <p className="mt-1 font-medium text-gray-900">{item.lote}</p>
              <p className="text-sm text-agronex-muted">{item.tipo}</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-agronex-muted">
                <MapPin className="h-3 w-3" />
                {item.local}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
