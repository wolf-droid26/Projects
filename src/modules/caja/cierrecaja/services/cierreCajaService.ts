/**
 * Servicio de Cierre de Caja
 * API: GET /api/caja/cierre
 * API: GET /api/caja/cierre/:id
 * API: POST /api/caja/cierre
 */

import type {
  CierreCaja,
  CierreCajaFormData,
} from "../interfaces/CierreCaja";

export const cierreCajaService = {
  async getAll(): Promise<CierreCaja[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [];
  },

  async getById(id: string): Promise<CierreCaja> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id,
      usuarioId: "1",
      aperturaCajaId: "1",
      monedas: [],
      observaciones: "",
      fechaCierre: new Date().toISOString(),
    };
  },

  async save(data: CierreCajaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[cierreCajaService.save] Cerrando caja:", data);
  },
};