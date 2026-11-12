import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
}

export default function PlaceholderPage({
  title,
  description,
  backHref = "/produtor/visao-geral",
  backLabel = "Voltar ao Início",
}: PlaceholderPageProps) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-agronex-muted">{description}</p>
        <Link
          href={backHref}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-agronex-green hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
      </div>
    </div>
  );
}
