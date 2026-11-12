import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type UserRole =
  | "produtor"
  | "comprador"
  | "transportador"
  | "veterinario";

export const ROLE_ROUTES: Record<UserRole, string> = {
  produtor: "/cadastro/produtor",
  comprador: "/cadastro/comprador",
  transportador: "/cadastro/transportador",
  veterinario: "/cadastro/veterinario",
};

export const ROLE_HOME: Record<UserRole, string> = {
  produtor: "/produtor/visao-geral",
  comprador: "/comprador/visao-geral",
  transportador: "/transportador/visao-geral",
  veterinario: "/veterinario/visao-geral",
};

/** Demo: roteia login conforme e-mail */
export function resolveRoleFromEmail(email: string): UserRole {
  const e = email.toLowerCase();
  if (e.includes("vet") || e.includes("veterinar")) return "veterinario";
  if (e.includes("trans") || e.includes("logist") || e.includes("frete"))
    return "transportador";
  if (e.includes("compra") || e.includes("buyer") || e.includes("agrotrade"))
    return "comprador";
  return "produtor";
}
