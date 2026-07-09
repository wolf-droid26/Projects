/**
 * Interfaces para Cliente
 */

export interface Cliente {
  id: string;
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  telefono: string;
  correo: string;
  direccion: string;
  estado: boolean;
}

export type ClienteFormData = Omit<Cliente, "id">;