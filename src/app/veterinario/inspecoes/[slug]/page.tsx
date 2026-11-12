"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { inspecaoDetail } from "@/lib/veterinario-data";

export default function InspecaoDetailPage() {
  const [checks, setChecks] = useState(
    inspecaoDetail.checklist.map(() => false),
  );
  const [parecer, setParecer] = useState("");

  const toggle = (i: number) => {
    setChecks((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="p-6 lg:p-8">
      <Link
        href="/veterinario/inspecoes"
        className="mb-4 inline-flex items-center gap-1 text-sm text-agronex-green hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar às inspeções
      </Link>

      <div className="mb-6">
        <p className="font-mono text-xs text-agronex-muted">{inspecaoDetail.id}</p>
        <h1 className="text-2xl font-bold text-gray-900">{inspecaoDetail.lote}</h1>
        <p className="mt-1 flex items-center gap-1 text-sm text-agronex-muted">
          <MapPin className="h-4 w-4" />
          {inspecaoDetail.produtor} · {inspecaoDetail.local}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">
              Fotos enviadas pelo produtor
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {inspecaoDetail.fotos.map((src, i) => (
                <div
                  key={src}
                  className="relative h-40 overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt={`Foto ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-agronex-muted">
              {inspecaoDetail.observacoesProdutor}
            </p>
          </div>

          <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">
              Checklist sanitário
            </h2>
            <ul className="space-y-2">
              {inspecaoDetail.checklist.map((item, i) => (
                <li key={item}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-agronex-border px-3 py-2.5 hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={checks[i]}
                      onChange={() => toggle(i)}
                      className="h-4 w-4 rounded border-gray-300 text-agronex-green focus:ring-agronex-green"
                    />
                    <span className="text-sm text-gray-800">{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
            <h2 className="mb-3 font-semibold text-gray-900">Dados do lote</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-agronex-muted">Quantidade</dt>
                <dd className="font-medium">{inspecaoDetail.quantidade}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-agronex-muted">Tipo</dt>
                <dd className="font-medium text-right">{inspecaoDetail.tipo}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-agronex-muted">Modo</dt>
                <dd className="font-medium">{inspecaoDetail.modo}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-agronex-border bg-white p-5 shadow-sm">
            <h2 className="mb-3 font-semibold text-gray-900">Parecer técnico</h2>
            <textarea
              value={parecer}
              onChange={(e) => setParecer(e.target.value)}
              rows={4}
              placeholder="Descreva o laudo, ressalvas e recomendações..."
              className="w-full rounded-lg border border-agronex-border px-3 py-2 text-sm outline-none focus:border-agronex-green focus:ring-2 focus:ring-agronex-green/15"
            />
            <div className="mt-4 flex flex-col gap-2">
              <Button className="w-full gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Aprovar e emitir laudo
              </Button>
              <Button variant="secondary" className="w-full gap-2 text-red-700">
                <XCircle className="h-4 w-4" />
                Reprovar / solicitar novas fotos
              </Button>
              <Button
                variant="secondary"
                href="/veterinario/agenda"
                className="w-full"
              >
                Agendar visita presencial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
