"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  MapPin,
  Stethoscope,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";

export default function SolicitarInspecaoPage() {
  const router = useRouter();
  const [modo, setModo] = useState<"fotos" | "presencial">("fotos");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center p-8">
        <div className="max-w-md rounded-2xl border border-agronex-border bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-7 w-7 text-agronex-green" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">
            Inspeção solicitada
          </h1>
          <p className="mt-2 text-sm text-agronex-muted">
            Um veterinário da rede Agronex receberá a solicitação. Você será
            notificado quando o laudo for emitido ou quando a visita for
            agendada.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button href="/produtor/inspecoes">Ver minhas inspeções</Button>
            <Button variant="secondary" href="/produtor/lotes">
              Voltar aos lotes
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      <Link
        href="/produtor/lotes"
        className="mb-4 inline-flex items-center gap-1 text-sm text-agronex-green hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>

      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-start gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <Stethoscope className="h-6 w-6 text-agronex-green" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Solicitar inspeção veterinária
            </h1>
            <p className="mt-1 text-sm text-agronex-muted">
              Envie fotos do lote animal ou agende visita presencial para
              liberar GTA, leilão e logística.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-xl border border-agronex-border bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">Dados do lote</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Select
                label="Lote"
                required
                defaultValue="nelore-45"
                options={[
                  { value: "nelore-45", label: "Bovinos Nelore #45 — 120 cabeças" },
                  { value: "bezerros-12", label: "Bezerros Desmama #12" },
                  { value: "vacas-08", label: "Vacas Primíparas #08" },
                ]}
              />
              <Select
                label="Finalidade"
                required
                defaultValue="gta"
                options={[
                  { value: "gta", label: "Liberação de GTA / trânsito" },
                  { value: "leilao", label: "Pré-leilão" },
                  { value: "saude", label: "Avaliação de saúde geral" },
                ]}
              />
              <Input
                label="Quantidade aproximada"
                required
                placeholder="Ex: 120 cabeças"
              />
              <Input
                label="Local da fazenda"
                required
                placeholder="Patos de Minas, MG"
              />
            </div>
          </div>

          <div className="rounded-xl border border-agronex-border bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">
              Modo de avaliação
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setModo("fotos")}
                className={`rounded-xl border-2 p-4 text-left transition-colors ${
                  modo === "fotos"
                    ? "border-agronex-green bg-green-50"
                    : "border-agronex-border hover:border-agronex-green/40"
                }`}
              >
                <Camera className="mb-2 h-5 w-5 text-agronex-green" />
                <p className="font-semibold text-gray-900">Por fotos</p>
                <p className="mt-1 text-xs text-agronex-muted">
                  Envie imagens do rebanho. O veterinário analisa remotamente.
                </p>
              </button>
              <button
                type="button"
                onClick={() => setModo("presencial")}
                className={`rounded-xl border-2 p-4 text-left transition-colors ${
                  modo === "presencial"
                    ? "border-agronex-green bg-green-50"
                    : "border-agronex-border hover:border-agronex-green/40"
                }`}
              >
                <MapPin className="mb-2 h-5 w-5 text-agronex-green" />
                <p className="font-semibold text-gray-900">Presencial</p>
                <p className="mt-1 text-xs text-agronex-muted">
                  Agenda visita do veterinário na propriedade.
                </p>
              </button>
            </div>

            {modo === "fotos" && (
              <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-agronex-border bg-gray-50 px-6 py-10 hover:border-agronex-green hover:bg-green-50/40">
                <input
                  type="file"
                  className="hidden"
                  multiple
                  accept=".jpg,.jpeg,.png"
                />
                <Upload className="mb-2 h-8 w-8 text-agronex-green" />
                <p className="text-sm font-medium text-gray-800">
                  Clique para enviar fotos do lote
                </p>
                <p className="mt-1 text-xs text-agronex-muted">
                  JPG ou PNG — até 10 fotos, máx. 10 MB cada
                </p>
              </label>
            )}

            {modo === "presencial" && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Input label="Data preferencial" type="date" required />
                <Select
                  label="Período"
                  required
                  defaultValue="manha"
                  options={[
                    { value: "manha", label: "Manhã" },
                    { value: "tarde", label: "Tarde" },
                  ]}
                />
              </div>
            )}
          </div>

          <div className="rounded-xl border border-agronex-border bg-white p-6 shadow-sm">
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Observações para o veterinário
            </label>
            <textarea
              rows={3}
              placeholder="Ex.: lote destinado a leilão, necessidade de laudo para GTA..."
              className="w-full rounded-lg border border-agronex-border px-3 py-2 text-sm outline-none focus:border-agronex-green focus:ring-2 focus:ring-agronex-green/15"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="secondary" href="/produtor/lotes">
              Cancelar
            </Button>
            <Button type="submit" className="gap-2">
              <Stethoscope className="h-4 w-4" />
              Enviar solicitação
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
