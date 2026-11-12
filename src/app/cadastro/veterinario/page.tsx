"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, BadgeCheck, Stethoscope } from "lucide-react";
import { AppFooter } from "@/components/layout/AppFooter";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Stepper } from "@/components/ui/Stepper";

const steps = [
  { number: 1, label: "Dados Profissionais" },
  { number: 2, label: "Área de Atuação" },
  { number: 3, label: "Documentos" },
];

export default function CadastroVeterinarioPage() {
  const router = useRouter();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/verificar-email?perfil=veterinario");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f6f7]">
      <div className="flex flex-1 flex-col items-center px-6 py-10">
        <div className="mb-8 w-full max-w-3xl text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <Stethoscope className="h-6 w-6 text-agronex-green" />
          </div>
          <h1 className="text-2xl font-bold text-agronex-green">
            Cadastro de Veterinário
          </h1>
          <p className="mt-2 text-sm text-agronex-muted">
            Avalie a saúde de lotes animais por fotos ou presencialmente e emita
            laudos na plataforma Agronex.
          </p>
        </div>

        <div className="mb-8">
          <Stepper steps={steps} currentStep={1} />
        </div>

        <div className="w-full max-w-3xl rounded-2xl border border-agronex-border bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-agronex-green" />
            <h2 className="text-lg font-semibold text-gray-900">
              Identificação profissional
            </h2>
          </div>

          <form onSubmit={handleNext} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Nome completo"
                required
                placeholder="Ex: Ana Paula Ribeiro"
              />
              <Input
                label="CPF"
                required
                placeholder="000.000.000-00"
              />
              <Input
                label="CRMV"
                required
                placeholder="Ex: CRMV-MG 12345"
              />
              <Select
                label="UF do CRMV"
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
                label="E-mail profissional"
                type="email"
                required
                placeholder="vet@email.com"
              />
              <Input
                label="Telefone / WhatsApp"
                required
                placeholder="(34) 99999-0000"
              />
            </div>

            <Select
              label="Modalidade de atendimento"
              required
              defaultValue="ambos"
              options={[
                { value: "remoto", label: "Somente avaliação por fotos" },
                { value: "presencial", label: "Somente visitas presenciais" },
                { value: "ambos", label: "Fotos e presencial" },
              ]}
            />

            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900">
              Após a verificação do e-mail, você poderá receber solicitações de
              inspeção ligadas a leilões de pecuária, emissão de GTA e liberação
              logística.
            </div>

            <div className="flex justify-end gap-3 border-t border-agronex-border pt-6">
              <Button variant="secondary" href="/cadastro">
                Cancelar
              </Button>
              <Button type="submit">
                Próximo Passo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
      <AppFooter variant="compact" />
    </div>
  );
}
