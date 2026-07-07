/**
 * Interfaces para Tipo de Cambio
 */

export interface TipoCambio {
  id: string;
  monedaOrigen: string;
  monedaDestino: string;
  precioCompra: number;
  precioVenta: number;
  fechaVigencia: string;
  activo: boolean;
  fechaCreacion: string;
}

export type TipoCambioFormData = Omit<
  TipoCambio,
  "id" | "fechaCreacion"
>;