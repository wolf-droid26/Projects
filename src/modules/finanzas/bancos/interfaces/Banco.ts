/**
 * Interfaces para Banco
 */

export interface Banco {
  id: string;
  nombre: string;
  codigo: string;
  direccion?: string;
  telefono?: string;
  correo?: string;
  estado: boolean;
}

export type BancoFormData = Omit<Banco, "id">;