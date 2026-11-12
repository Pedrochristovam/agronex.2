"use client";

import { ProducerHeader } from "@/components/produtor/ProducerHeader";
import { CompradorSidebar } from "@/components/comprador/CompradorSidebar";

export function CompradorShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f6f7]">
      <CompradorSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <ProducerHeader searchPlaceholder="Buscar leilões, pedidos, produtos..." />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
