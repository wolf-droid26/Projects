/**
 * Servicio de Bancos
 * API: GET /api/bancos
 * API: GET /api/bancos/:id
 * API: POST /api/bancos
 * API: PUT /api/bancos/:id
 * API: DELETE /api/bancos/:id
 */

import type { Banco, BancoFormData } from "../interfaces/Banco";

export const bancoService = {
  async getAll(): Promise<Banco[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[bancoService.getAll] Obteniendo bancos");

    return [];
  },

  async getById(id: string): Promise<Banco> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id,
      nombre: "Banco de Crédito del Perú",
      codigo: "BCP",
      direccion: "Lima",
      telefono: "999999999",
      correo: "contacto@bcp.com",
      estado: true,
    };
  },

  async save(data: BancoFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[bancoService.save]", data);
  },

  async update(id: string, data: BancoFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[bancoService.update]", id, data);
  },

  async delete(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[bancoService.delete]", id);
  },
};