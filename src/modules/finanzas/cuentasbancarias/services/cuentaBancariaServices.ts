/**
 * Servicio de Cuentas Bancarias
 * API: GET /api/cuentas-bancarias
 * API: GET /api/cuentas-bancarias/:id
 * API: POST /api/cuentas-bancarias
 * API: PUT /api/cuentas-bancarias/:id
 * API: DELETE /api/cuentas-bancarias/:id
 */

import type {
  CuentaBancaria,
  CuentaBancariaFormData,
} from "../interfaces/CuentaBancaria";

export const cuentaBancariaService = {
  async getAll(): Promise<CuentaBancaria[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [];
  },

  async getById(id: string): Promise<CuentaBancaria> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id,
      bancoId: "1",
      numeroCuenta: "191-1234567890",
      tipoCuenta: "CORRIENTE",
      monedaId: "PEN",
      saldoActual: 5000,
      titular: "Casa Cambio Perú",
      estado: true,
    };
  },

  async save(data: CuentaBancariaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[cuentaBancariaService.save]", data);
  },

  async update(id: string, data: CuentaBancariaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[cuentaBancariaService.update]", id, data);
  },

  async delete(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[cuentaBancariaService.delete]", id);
  },
};