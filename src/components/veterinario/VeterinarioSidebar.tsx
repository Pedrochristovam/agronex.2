"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Calendar,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    href: "/veterinario/visao-geral",
    isActive: (p: string) =>
      p === "/veterinario" || p.startsWith("/veterinario/visao-geral"),
    label: "Início",
    icon: LayoutDashboard,
  },
  {
    href: "/veterinario/inspecoes",
    isActive: (p: string) => p.startsWith("/veterinario/inspecoes"),
    label: "Inspeções",
    icon: ClipboardCheck,
  },
  {
    href: "/veterinario/agenda",
    isActive: (p: string) => p.startsWith("/veterinario/agenda"),
    label: "Agenda",
    icon: Calendar,
  },
  {
    href: "/veterinario/laudos",
    isActive: (p: string) => p.startsWith("/veterinario/laudos"),
    label: "Laudos",
    icon: FileText,
  },
];

export function VeterinarioSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="flex h-screen w-64 flex-shrink-0 flex-col bg-agronex-green-dark text-white">
      <div className="border-b border-white/10 px-5 py-6">
        <Link href="/veterinario/visao-geral" className="block">
          <span className="text-lg font-bold tracking-wide">AGRONEX WEB</span>
          <span className="mt-0.5 block text-xs text-white/70">
            Veterinário Sanitário
          </span>
        </Link>
        <Link
          href="/veterinario/inspecoes"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-agronex-accent px-4 py-2.5 text-sm font-semibold text-agronex-green-dark hover:bg-green-300"
        >
          <Stethoscope className="h-4 w-4" />
          Nova Inspeção
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive(pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-1 border-t border-white/10 px-3 py-4">
        <Link
          href="/veterinario/configuracoes"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 hover:bg-white/10"
        >
          <Settings className="h-4 w-4" />
          Configurações
        </Link>
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 hover:bg-white/10"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </button>
        <div className="mt-2 flex items-center gap-3 px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-agronex-accent text-xs font-bold text-agronex-green-dark">
            DR
          </div>
          <div>
            <p className="text-sm font-medium">Dra. Ana Ribeiro</p>
            <p className="text-xs text-white/50">CRMV-MG 12345</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
