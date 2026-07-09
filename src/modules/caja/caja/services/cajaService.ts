/**
 * Servicio de Caja
 * API: GET /api/caja
 * API: GET /api/caja/:id
 * API: POST /api/caja
 */

import type { Caja, CajaFormData } from "../interfaces/Caja";

export const cajaService = {
  async getAll(): Promise<Caja[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return [];
  },

  async getById(id: string): Promise<Caja> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id,
      nombre: "Caja Principal",
      descripcion: "Caja principal de la empresa",
      saldoActual: 5000,
      estado: true,
    };
  },

  async save(data: CajaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[cajaService.save]", data);
  },

  async delete(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[cajaService.delete]", id);
  },
};