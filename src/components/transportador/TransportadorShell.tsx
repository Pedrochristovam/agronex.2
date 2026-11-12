"use client";

import { ProducerHeader } from "@/components/produtor/ProducerHeader";
import { TransportadorSidebar } from "@/components/transportador/TransportadorSidebar";

export function TransportadorShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f6f7]">
      <TransportadorSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <ProducerHeader searchPlaceholder="Buscar fretes, cargas, placas..." />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
