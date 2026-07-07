/**
 * Interfaces para Caja
 */

export interface Caja {
  id: string;
  nombre: string;
  descripcion: string;
  saldoActual: number;
  estado: boolean;
}

export type CajaFormData = Omit<Caja, "id">;