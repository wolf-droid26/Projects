/**
 * Servicio de Apertura de Caja
 * API: GET /api/caja/apertura
 * API: GET /api/caja/apertura/:id
 * API: POST /api/caja/apertura
 */

import type {
  AperturaCaja,
  AperturaCajaFormData,
} from "../interfaces/AperturaCaja";

export const aperturaCajaService = {
  async getAll(): Promise<AperturaCaja[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return [];
  },

  async getById(id: string): Promise<AperturaCaja> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id,
      usuarioId: "1",
      montoInicial: 1000,
      monedas: [],
      observaciones: "",
      fechaApertura: new Date().toISOString(),
    };
  },

  async save(data: AperturaCajaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[aperturaCajaService.save] Abriendo caja:", data);
  },
};
