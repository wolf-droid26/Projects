/**
 * Servicio de Tipos de Cambio
 * API: GET /api/finanzas/tipos-cambio
 * API: GET /api/finanzas/tipos-cambio/:id
 * API: GET /api/finanzas/tipos-cambio?activos=true
 * API: POST /api/finanzas/tipos-cambio
 */

import type {
  TipoCambio,
  TipoCambioFormData,
} from "../Interfaces/TipoCambio";

export const tipoCambioService = {
  async getAll(): Promise<TipoCambio[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [];
  },

  async getActivos(): Promise<TipoCambio[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [];
  },

  async getById(id: string): Promise<TipoCambio> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id,
      monedaOrigen: "USD",
      monedaDestino: "PEN",
      precioCompra: 3.68,
      precioVenta: 3.75,
      fechaVigencia: new Date().toISOString(),
      activo: true,
      fechaCreacion: new Date().toISOString(),
    };
  },

  async save(data: TipoCambioFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[tipoCambioService.save]", data);
  },

  async update(id: string, data: TipoCambioFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[tipoCambioService.update]", id, data);
  },

  async delete(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[tipoCambioService.delete]", id);
  },
};