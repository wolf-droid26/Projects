/**
 * Interfaces para Apertura de Caja
 */

export interface MonedaApertura {
  monedaId: string;
  monto: number;
}

export interface AperturaCaja {
  id: string;
  usuarioId: string;
  montoInicial: number;
  monedas: MonedaApertura[];
  observaciones?: string;
  fechaApertura: string;
}

export type AperturaCajaFormData = Omit<AperturaCaja, "id">;