"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Gavel,
  Heart,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingCart,
  TrendingUp,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    href: "/comprador/visao-geral",
    isActive: (p: string) =>
      p === "/comprador" || p.startsWith("/comprador/visao-geral"),
    label: "Início",
    icon: LayoutDashboard,
  },
  {
    href: "/comprador/leiloes",
    isActive: (p: string) => p.startsWith("/comprador/leiloes"),
    label: "Leilões",
    icon: Gavel,
  },
  {
    href: "/comprador/lances",
    isActive: (p: string) => p.startsWith("/comprador/lances"),
    label: "Meus lances",
    icon: TrendingUp,
  },
  {
    href: "/comprador/pedidos",
    isActive: (p: string) => p.startsWith("/comprador/pedidos"),
    label: "Pedidos",
    icon: ShoppingCart,
  },
  {
    href: "/comprador/logistica",
    isActive: (p: string) => p.startsWith("/comprador/logistica"),
    label: "Entregas",
    icon: Truck,
  },
  {
    href: "/comprador/favoritos",
    isActive: (p: string) => p.startsWith("/comprador/favoritos"),
    label: "Favoritos",
    icon: Heart,
  },
];

export function CompradorSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="flex h-screen w-64 flex-shrink-0 flex-col bg-agronex-green-dark text-white">
      <div className="border-b border-white/10 px-5 py-6">
        <Link href="/comprador/visao-geral" className="block">
          <span className="text-lg font-bold tracking-wide">AGRONEX WEB</span>
          <span className="mt-0.5 block text-xs text-white/70">
            Comprador B2B
          </span>
        </Link>
        <Link
          href="/comprador/leiloes"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-agronex-accent px-4 py-2.5 text-sm font-semibold text-agronex-green-dark hover:bg-green-300"
        >
          <Gavel className="h-4 w-4" />
          Explorar Leilões
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
          href="/comprador/configuracoes"
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
            AT
          </div>
          <div>
            <p className="text-sm font-medium">AgroTrade</p>
            <p className="text-xs text-white/50">Comprador verificado</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
