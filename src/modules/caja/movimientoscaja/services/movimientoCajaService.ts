/**
 * Servicio de Movimiento de Caja
 * API: GET /api/caja/movimientos
 * API: GET /api/caja/movimientos/:id
 * API: POST /api/caja/movimientos
 */

import type {
  MovimientoCaja,
  MovimientoCajaFormData,
} from "../interfaces/MovimientoCaja";

export const movimientoCajaService = {
  async getAll(): Promise<MovimientoCaja[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [];
  },

  async getById(id: string): Promise<MovimientoCaja> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id,
      cajaId: "1",
      usuarioId: "1",
      tipo: "INGRESO",
      concepto: "Ingreso inicial",
      monto: 500,
      monedaId: "PEN",
      observaciones: "",
      fechaMovimiento: new Date().toISOString(),
    };
  },

  async save(data: MovimientoCajaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[movimientoCajaService.save]", data);
  },
};