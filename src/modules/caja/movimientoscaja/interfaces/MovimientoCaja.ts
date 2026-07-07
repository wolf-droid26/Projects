/**
 * Interfaces para Movimiento de Caja
 */

export type TipoMovimientoCaja = "INGRESO" | "EGRESO";

export interface MovimientoCaja {
  id: string;
  cajaId: string;
  usuarioId: string;
  tipo: TipoMovimientoCaja;
  concepto: string;
  monto: number;
  monedaId: string;
  observaciones?: string;
  fechaMovimiento: string;
}

export type MovimientoCajaFormData = Omit<
  MovimientoCaja,
  "id" | "fechaMovimiento"
>;