import Link from "next/link";

const pedidos = [
  {
    id: "AGX-9042",
    produto: "Soja Grau A — 500 t",
    produtor: "Fazenda Boa Vista",
    status: "Em trânsito",
    valor: "R$ 84.725,00",
    href: "/produtor/pedidos/agx-9042",
  },
  {
    id: "AGX-9011",
    produto: "Milho Grão — 200 t",
    produtor: "Cooperativa Vale do Rio",
    status: "Pagamento retido",
    valor: "R$ 22.300,00",
    href: "/produtor/pedidos",
  },
  {
    id: "AGX-8980",
    produto: "Café Arábica — 120 sc",
    produtor: "Sítio Alta Mogiana",
    status: "Concluído",
    valor: "R$ 114.000,00",
    href: "/produtor/pedidos",
  },
];

export default function CompradorPedidosPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Meus pedidos</h1>
        <p className="mt-1 text-sm text-agronex-muted">
          Compras originadas de leilões e negociação direta
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-agronex-border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-agronex-border bg-gray-50 text-left text-xs font-medium uppercase text-agronex-muted">
              <th className="px-5 py-3">Pedido</th>
              <th className="px-5 py-3">Produto</th>
              <th className="px-5 py-3">Produtor</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Valor</th>
              <th className="px-5 py-3">Ação</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => (
              <tr
                key={p.id}
                className="border-b border-agronex-border last:border-0"
              >
                <td className="px-5 py-4 font-mono text-xs">{p.id}</td>
                <td className="px-5 py-4 font-medium">{p.produto}</td>
                <td className="px-5 py-4 text-agronex-muted">{p.produtor}</td>
                <td className="px-5 py-4">{p.status}</td>
                <td className="px-5 py-4 font-semibold">{p.valor}</td>
                <td className="px-5 py-4">
                  <Link
                    href={p.href}
                    className="text-xs font-semibold text-agronex-green hover:underline"
                  >
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
