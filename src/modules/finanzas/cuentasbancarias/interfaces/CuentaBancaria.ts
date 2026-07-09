/**
 * Interfaces para Cuenta Bancaria
 */

export interface CuentaBancaria {
  id: string;
  bancoId: string;
  numeroCuenta: string;
  tipoCuenta: string;
  monedaId: string;
  saldoActual: number;
  titular: string;
  estado: boolean;
}

export type CuentaBancariaFormData = Omit<CuentaBancaria, "id">;