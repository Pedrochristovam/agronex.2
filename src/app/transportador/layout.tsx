import { TransportadorShell } from "@/components/transportador/TransportadorShell";

export default function TransportadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TransportadorShell>{children}</TransportadorShell>;
}
