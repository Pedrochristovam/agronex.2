"use client";

import { ProducerHeader } from "@/components/produtor/ProducerHeader";
import { VeterinarioSidebar } from "@/components/veterinario/VeterinarioSidebar";

export function VeterinarioShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f6f7]">
      <VeterinarioSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <ProducerHeader searchPlaceholder="Buscar inspeções, lotes, laudos..." />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
