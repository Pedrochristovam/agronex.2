import { CompradorShell } from "@/components/comprador/CompradorShell";

export default function CompradorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CompradorShell>{children}</CompradorShell>;
}
