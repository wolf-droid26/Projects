/**
 * Interfaces para Cierre de Caja
 */

export interface MonedaCierre {
  monedaId: string;
  montoFinal: number;
}

export interface CierreCaja {
  id: string;
  usuarioId: string;
  aperturaCajaId: string;
  monedas: MonedaCierre[];
  observaciones?: string;
  fechaCierre: string;
}

export type CierreCajaFormData = Omit<CierreCaja, "id">;