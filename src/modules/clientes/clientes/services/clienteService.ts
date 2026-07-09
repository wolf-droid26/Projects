/**
 * Servicio de Clientes
 * API: GET /api/clientes
 * API: GET /api/clientes/:id
 * API: POST /api/clientes
 * API: PUT /api/clientes/:id
 * API: DELETE /api/clientes/:id
 */

import type { Cliente, ClienteFormData } from "../Interfaces/Cliente";

export const clienteService = {
  async getAll(): Promise<Cliente[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[clienteService.getAll] Obteniendo clientes");

    return [];
  },

  async getById(id: string): Promise<Cliente> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id,
      nombres: "Juan",
      apellidos: "Pérez",
      tipoDocumento: "DNI",
      numeroDocumento: "12345678",
      telefono: "999999999",
      correo: "juan@gmail.com",
      direccion: "Lima",
      estado: true,
    };
  },

  async save(data: ClienteFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[clienteService.save] Guardando cliente:", data);
  },

  async update(id: string, data: ClienteFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[clienteService.update]", id, data);
  },

  async delete(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[clienteService.delete]", id);
  },
};