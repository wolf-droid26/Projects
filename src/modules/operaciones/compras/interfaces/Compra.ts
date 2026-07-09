/**
 * Interfaces para Compra
 */

export interface Compra {
  id: string;
  clienteId: string;
  monedaId: string;
  montoDivisas: number;
  tipoCambioAplicado: number;
  montoLocal: number;
  comision: number;
  montoFinal: number;
  observaciones?: string;
  fechaCreacion: string;
}

export type CompraFormData = Omit<
  Compra,
  "id" | "fechaCreacion" | "montoLocal" | "montoFinal"
>;