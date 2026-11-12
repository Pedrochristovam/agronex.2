"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, Info, Truck, Upload } from "lucide-react";
import { AppFooter } from "@/components/layout/AppFooter";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Stepper } from "@/components/ui/Stepper";

const steps = [
  { number: 1, label: "Dados Gerais" },
  { number: 2, label: "Frota & Região" },
  { number: 3, label: "Documentos" },
];

export default function CadastroTransportadorPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const goNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    router.push("/verificar-email?perfil=transportador");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f6f7]">
      <div className="flex flex-1 flex-col items-center px-6 py-10">
        <div className="mb-8 w-full max-w-3xl text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <Truck className="h-6 w-6 text-agronex-green" />
          </div>
          <h1 className="text-2xl font-bold text-agronex-green">
            Cadastro de Transportador
          </h1>
          <p className="mt-2 text-sm text-agronex-muted">
            Transporte lotes leiloados com fretes, rastreio e comprovação de
            entrega na rede Agronex.
          </p>
        </div>

        <div className="mb-8">
          <Stepper steps={steps} currentStep={step} />
        </div>

        <div className="w-full max-w-3xl space-y-6">
          <div className="rounded-2xl border border-agronex-border bg-white p-8 shadow-sm">
            {step === 1 && (
              <>
                <div className="mb-6 flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-agronex-green" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Identificação
                  </h2>
                </div>
                <form onSubmit={goNext} className="space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      label="Nome da Transportadora ou Autônomo"
                      required
                      placeholder="Razão Social ou Nome Completo"
                    />
                    <Input
                      label="CPF / CNPJ"
                      required
                      placeholder="00.000.000/0000-00"
                    />
                    <Input
                      label="RNTRC"
                      required
                      placeholder="Registro ANTT"
                      rightElement={
                        <span title="Número do registro ANTT">
                          <Info className="h-4 w-4 text-gray-400" />
                        </span>
                      }
                    />
                    <Input
                      label="E-mail"
                      type="email"
                      required
                      placeholder="logistica@empresa.com"
                    />
                    <Input
                      label="Telefone"
                      required
                      placeholder="(34) 99999-0000"
                    />
                    <Select
                      label="Tipo de operação"
                      required
                      defaultValue="empresa"
                      options={[
                        { value: "autonomo", label: "Autônomo" },
                        {
                          value: "empresa",
                          label: "Empresa / Transportadora",
                        },
                        { value: "cooperativa", label: "Cooperativa" },
                      ]}
                    />
                  </div>
                  <div className="flex justify-between border-t border-agronex-border pt-6">
                    <Button variant="secondary" href="/cadastro">
                      Cancelar
                    </Button>
                    <Button type="submit">
                      Próximo
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="mb-6 text-lg font-semibold text-gray-900">
                  Frota & região de atuação
                </h2>
                <form onSubmit={goNext} className="space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Select
                      label="Principal tipo de veículo"
                      required
                      defaultValue="carreta"
                      options={[
                        { value: "carreta", label: "Carreta graneleira" },
                        { value: "bitrem", label: "Bitrem" },
                        { value: "truck", label: "Truck / Toco" },
                        { value: "bau", label: "Baú / carga seca" },
                        { value: "boiadeiro", label: "Carreta boiadeira" },
                      ]}
                    />
                    <Input
                      label="Placa principal"
                      required
                      placeholder="ABC1D23"
                    />
                    <Input
                      label="Capacidade aproximada (t)"
                      type="number"
                      placeholder="Ex: 32"
                    />
                    <Input
                      label="Quantidade de veículos"
                      type="number"
                      placeholder="Ex: 5"
                    />
                    <Select
                      label="Estado base"
                      required
                      defaultValue="MG"
                      options={[
                        { value: "MG", label: "Minas Gerais" },
                        { value: "SP", label: "São Paulo" },
                        { value: "GO", label: "Goiás" },
                        { value: "MT", label: "Mato Grosso" },
                        { value: "PR", label: "Paraná" },
                      ]}
                    />
                    <Input
                      label="Cidade base"
                      required
                      placeholder="Ex: Uberaba"
                    />
                    <Select
                      label="Raio de atuação preferido"
                      defaultValue="500"
                      options={[
                        { value: "200", label: "Até 200 km" },
                        { value: "500", label: "Até 500 km" },
                        { value: "1000", label: "Até 1.000 km" },
                        { value: "nacional", label: "Nacional" },
                      ]}
                    />
                    <Select
                      label="Disponibilidade"
                      defaultValue="imediata"
                      options={[
                        { value: "imediata", label: "Imediata" },
                        { value: "7dias", label: "Em até 7 dias" },
                        { value: "sob-demanda", label: "Sob demanda" },
                      ]}
                    />
                  </div>
                  <div className="flex justify-between border-t border-agronex-border pt-6">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setStep(1)}
                      className="gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Voltar
                    </Button>
                    <Button type="submit">
                      Próximo
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  Documentos operacionais
                </h2>
                <p className="mb-6 text-sm text-agronex-muted">
                  Anexe para acelerar a liberação de fretes (pode completar
                  depois).
                </p>
                <form onSubmit={goNext} className="space-y-4">
                  {[
                    "RNTRC / comprovante ANTT",
                    "CRLV do veículo principal",
                    "Seguro de carga / RCTR-C",
                  ].map((doc) => (
                    <label
                      key={doc}
                      className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-agronex-border px-4 py-4 hover:border-agronex-green hover:bg-green-50/40"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {doc}
                        </p>
                        <p className="text-xs text-agronex-muted">
                          PDF, JPG ou PNG — máx. 10 MB
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-lg border border-agronex-border px-3 py-1.5 text-xs font-semibold text-gray-700">
                        <Upload className="h-3.5 w-3.5" />
                        Anexar
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </label>
                  ))}
                  <div className="flex justify-between border-t border-agronex-border pt-6">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setStep(2)}
                      className="gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Voltar
                    </Button>
                    <Button type="submit">
                      Finalizar cadastro
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <AppFooter variant="compact" />
    </div>
  );
}
