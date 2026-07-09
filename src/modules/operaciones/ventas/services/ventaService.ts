/**
 * Servicio de Ventas
 * API: POST /api/operaciones/ventas
 */

import type { VentaFormData } from "@/shared/schemas/formSchemas";

export const ventaService = {
  /**
   * Registra una nueva venta.
   * Pendiente: implementar POST /api/operaciones/ventas.
   */
  async save(data: VentaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[ventaService.save] Registrando venta:", data);
  },
};