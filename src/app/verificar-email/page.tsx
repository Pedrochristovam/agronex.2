import { Suspense } from "react";
import VerificarEmailClient from "./VerificarEmailClient";

export default function VerificarEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f5f6f7] text-sm text-agronex-muted">
          Carregando...
        </div>
      }
    >
      <VerificarEmailClient />
    </Suspense>
  );
}
