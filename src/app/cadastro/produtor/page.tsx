"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { AppFooter } from "@/components/layout/AppFooter";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Stepper } from "@/components/ui/Stepper";

const steps = [
  { number: 1, label: "Dados Pessoais" },
  { number: 2, label: "Localização" },
  { number: 3, label: "Documentos" },
];

export default function CadastroProdutorPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const goNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    router.push("/verificar-email?perfil=produtor");
  };

  return (
    <div className="grid-pattern flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center px-6 py-10">
        <div className="mb-8 w-full max-w-3xl text-center">
          <h1 className="text-2xl font-bold text-agronex-green">
            Cadastro de Produtor Rural
          </h1>
          <p className="mt-2 text-sm text-agronex-muted">
            Bem-vindo ao AGRONEX. Siga os passos abaixo para registrar sua
            propriedade.
          </p>
        </div>

        <div className="mb-8">
          <Stepper steps={steps} currentStep={step} />
        </div>

        <div className="w-full max-w-3xl rounded-2xl border border-agronex-border bg-white p-8 shadow-sm">
          {step === 1 && (
            <>
              <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Dados Pessoais ou Empresariais
              </h2>
              <form onSubmit={goNext} className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Select
                    label="Tipo de Pessoa"
                    required
                    defaultValue="pf"
                    options={[
                      { value: "pf", label: "Pessoa Física" },
                      { value: "pj", label: "Pessoa Jurídica" },
                    ]}
                  />
                  <Input
                    label="Nome / Razão Social"
                    required
                    placeholder="Ex: João da Silva ou Agrícola Silva Ltda"
                  />
                  <Input
                    label="CPF / CNPJ"
                    required
                    placeholder="000.000.000-00"
                    helperText="Digite apenas números."
                  />
                  <Input
                    label="Inscrição Estadual"
                    placeholder="Opcional se Isento"
                  />
                  <Input
                    label="E-mail"
                    type="email"
                    required
                    placeholder="joao@fazenda.com"
                  />
                  <Input
                    label="Telefone"
                    required
                    placeholder="(34) 99999-0000"
                  />
                </div>
                <div className="flex justify-end border-t border-agronex-border pt-6">
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
                Localização da Propriedade
              </h2>
              <form onSubmit={goNext} className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    label="Nome da Fazenda / Propriedade"
                    required
                    placeholder="Ex: Fazenda Boa Vista"
                    className="md:col-span-2"
                  />
                  <Input
                    label="Endereço / Rodovia"
                    required
                    placeholder="Ex: Rodovia MG-179, Km 42"
                    className="md:col-span-2"
                  />
                  <Input label="Cidade" required placeholder="Patos de Minas" />
                  <Select
                    label="Estado"
                    required
                    defaultValue="MG"
                    options={[
                      { value: "MG", label: "Minas Gerais" },
                      { value: "SP", label: "São Paulo" },
                      { value: "GO", label: "Goiás" },
                      { value: "MT", label: "Mato Grosso" },
                      { value: "PR", label: "Paraná" },
                      { value: "MS", label: "Mato Grosso do Sul" },
                      { value: "BA", label: "Bahia" },
                    ]}
                  />
                  <Input label="CEP" required placeholder="38700-000" />
                  <Input
                    label="Área (hectares)"
                    type="number"
                    placeholder="Ex: 1250"
                  />
                  <Input
                    label="Registro / Matrícula"
                    placeholder="Ex: MG-1234567"
                    className="md:col-span-2"
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
                Documentos da propriedade
              </h2>
              <p className="mb-6 text-sm text-agronex-muted">
                Anexe os documentos para validação cadastral (pode completar
                depois no painel).
              </p>
              <form onSubmit={goNext} className="space-y-4">
                {[
                  "CAR — Cadastro Ambiental Rural",
                  "DAP / CAF — Declaração de Aptidão",
                  "Documento de identidade / contrato social",
                ].map((doc) => (
                  <label
                    key={doc}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-agronex-border px-4 py-4 hover:border-agronex-green hover:bg-green-50/40"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">{doc}</p>
                      <p className="text-xs text-agronex-muted">
                        PDF, JPG ou PNG — máx. 10 MB
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-lg border border-agronex-border px-3 py-1.5 text-xs font-semibold text-gray-700">
                      <Upload className="h-3.5 w-3.5" />
                      Anexar
                    </span>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
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

      <AppFooter brand="AGRONEX" variant="compact" />
    </div>
  );
}
