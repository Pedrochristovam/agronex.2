import { VeterinarioShell } from "@/components/veterinario/VeterinarioShell";

export default function VeterinarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <VeterinarioShell>{children}</VeterinarioShell>;
}
