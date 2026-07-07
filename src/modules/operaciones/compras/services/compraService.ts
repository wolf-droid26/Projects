/**
 * Servicio de Compras
 * API: POST /api/operaciones/compras
 */

import type { Compra } from "../interfaces/Compra";

type CompraFormData = Omit<
  Compra,
  "id" | "fechaCreacion" | "montoLocal" | "montoFinal"
>;

export const compraService = {
  async save(data: CompraFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[compraService.save] Registrando compra:", data);
  },
};