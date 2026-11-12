"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Coffee,
  Leaf,
  MapPin,
  Shield,
  Sprout,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Stepper } from "@/components/ui/Stepper";
import { cn } from "@/lib/utils";

const steps = [
  { number: 1, label: "Empresa" },
  { number: 2, label: "Demanda" },
  { number: 3, label: "Revisão" },
];

const categories = [
  { id: "soja", label: "Soja", icon: Leaf },
  { id: "milho", label: "Milho", icon: Sprout },
  { id: "cafe", label: "Café", icon: Coffee },
  { id: "algodao", label: "Algodão", icon: Sprout },
];

export default function CadastroCompradorPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "soja",
  ]);
  const [form, setForm] = useState({
    razao: "",
    cnpj: "",
    sede: "",
    volume: "100-500",
    destino: "",
    responsavel: "",
    email: "",
  });

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const goNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    router.push("/verificar-email?perfil=comprador");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 p-4 md:p-8">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="relative hidden w-72 flex-shrink-0 flex-col justify-between bg-agronex-green-dark p-8 text-white md:flex lg:w-80">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative">
            <h1 className="text-3xl font-bold tracking-widest">AGRONEX</h1>
            <p className="mt-2 text-sm text-white/80">
              Cadastro de Comprador B2B
            </p>
          </div>
          <div className="relative space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-agronex-accent" />
              <p className="text-sm text-white/90">
                Acesso à maior rede de produtores verificados
              </p>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-agronex-accent" />
              <p className="text-sm text-white/90">
                Dados de safra e logística em tempo real
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-10">
          <div className="mb-8">
            <Stepper steps={steps} currentStep={step} variant="buyer" />
          </div>

          {step === 1 && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Dados da empresa
                </h2>
                <p className="mt-1 text-sm text-agronex-muted">
                  Informações oficiais para validação B2B
                </p>
              </div>
              <form onSubmit={goNext} className="space-y-5">
                <Input
                  label="Razão Social"
                  required
                  placeholder="Nome oficial da empresa"
                  icon={Building2}
                  value={form.razao}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, razao: e.target.value }))
                  }
                />
                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    label="CNPJ"
                    required
                    placeholder="00.000.000/0000-00"
                    value={form.cnpj}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, cnpj: e.target.value }))
                    }
                  />
                  <Input
                    label="Localização da Sede"
                    required
                    placeholder="Cidade, Estado"
                    icon={MapPin}
                    value={form.sede}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, sede: e.target.value }))
                    }
                  />
                </div>
                <Input
                  label="Responsável comercial"
                  required
                  placeholder="Nome completo"
                  value={form.responsavel}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, responsavel: e.target.value }))
                  }
                />
                <Input
                  label="E-mail corporativo"
                  type="email"
                  required
                  placeholder="compras@empresa.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
                <div className="flex items-center justify-between border-t border-agronex-border pt-6">
                  <Link
                    href="/cadastro"
                    className="text-sm font-medium text-agronex-green hover:underline"
                  >
                    ← Voltar
                  </Link>
                  <Button type="submit">
                    Continuar
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Perfil de demanda
                </h2>
                <p className="mt-1 text-sm text-agronex-muted">
                  Ajuda a priorizar leilões e produtores na sua região
                </p>
              </div>
              <form onSubmit={goNext} className="space-y-5">
                <Select
                  label="Volume Estimado (Mensal)"
                  required
                  value={form.volume}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, volume: e.target.value }))
                  }
                  options={[
                    { value: "ate-100", label: "Até 100 toneladas" },
                    { value: "100-500", label: "100 a 500 toneladas" },
                    { value: "500-1000", label: "500 a 1.000 toneladas" },
                    { value: "1000+", label: "Acima de 1.000 toneladas" },
                  ]}
                />
                <Input
                  label="Destino principal / porto / planta"
                  required
                  placeholder="Ex: Santos-SP, Paranaguá-PR"
                  value={form.destino}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, destino: e.target.value }))
                  }
                />
                <div>
                  <label className="mb-3 block text-sm font-medium text-agronex-green">
                    Categorias de interesse
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = selectedCategories.includes(cat.id);
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => toggleCategory(cat.id)}
                          className={cn(
                            "flex items-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors",
                            isSelected
                              ? "border-agronex-green bg-green-50 text-agronex-green"
                              : "border-agronex-border text-gray-700 hover:border-agronex-green/50",
                          )}
                        >
                          <Icon className="h-4 w-4" />
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>
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
                    Continuar
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </>
          )}

          {step === 3 && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Revisar e enviar
                </h2>
                <p className="mt-1 text-sm text-agronex-muted">
                  Confira os dados antes da verificação de e-mail
                </p>
              </div>
              <form onSubmit={goNext} className="space-y-5">
                <div className="rounded-xl border border-agronex-border bg-gray-50 p-5 text-sm">
                  <dl className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <dt className="text-agronex-muted">Razão social</dt>
                      <dd className="font-medium text-gray-900">
                        {form.razao || "—"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-agronex-muted">CNPJ</dt>
                      <dd className="font-medium text-gray-900">
                        {form.cnpj || "—"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-agronex-muted">Sede</dt>
                      <dd className="font-medium text-gray-900">
                        {form.sede || "—"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-agronex-muted">Destino</dt>
                      <dd className="font-medium text-gray-900">
                        {form.destino || "—"}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-agronex-muted">Categorias</dt>
                      <dd className="font-medium text-gray-900">
                        {selectedCategories.length
                          ? selectedCategories
                              .map(
                                (id) =>
                                  categories.find((c) => c.id === id)?.label ??
                                  id,
                              )
                              .join(", ")
                          : "Nenhuma"}
                      </dd>
                    </div>
                  </dl>
                </div>
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input type="checkbox" required className="mt-1" />
                  Declaro que as informações são verdadeiras e aceito os termos
                  de uso B2B da Agronex.
                </label>
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
  );
}
