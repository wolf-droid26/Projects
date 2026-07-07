/**
 * Servicio de Monedas
 * API: GET/POST /api/finanzas/monedas
 */

import type { Moneda } from "../Interfaces/Moneda";

type MonedaFormData = Omit<Moneda, "id" | "fechaCreacion">;

export const monedaService = {
  async save(data: MonedaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[monedaService.save] Guardando moneda:", data);
  },

  async getAll(): Promise<Moneda[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[monedaService.getAll] Obteniendo monedas");
    return [];
  },
};