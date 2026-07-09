import { useCallback } from 'react';

/**
 * Hook para cálculos automáticos en formularios de operaciones
 * Usado en CompraForm y VentaForm
 */

export interface CalculosCompra {
  montoLocal: number;
  montoFinal: number;
}

export interface CalculosVenta {
  montoDivisas: number;
  montoFinal: number;
}

export function useCalculations() {
  /**
   * Calcula el monto final de una COMPRA de divisas
   * montoLocal = montoDivisas * tipoCambio
   * montoFinal = montoLocal - comision
   */
  const calcularCompra = useCallback(
    (montoDivisas: number, tipoCambio: number, comision: number = 0): CalculosCompra => {
      if (!montoDivisas || !tipoCambio) {
        return { montoLocal: 0, montoFinal: 0 };
      }

      const montoLocal = montoDivisas * tipoCambio;
      const montoFinal = montoLocal - comision;

      return {
        montoLocal: Math.round(montoLocal * 100) / 100,
        montoFinal: Math.round(montoFinal * 100) / 100,
      };
    },
    []
  );

  /**
   * Calcula el monto final de una VENTA de divisas
   * montoDivisas = montoLocal / tipoCambio
   * montoFinal = montoLocal - comision
   */
  const calcularVenta = useCallback(
    (montoLocal: number, tipoCambio: number, comision: number = 0): CalculosVenta => {
      if (!montoLocal || !tipoCambio) {
        return { montoDivisas: 0, montoFinal: 0 };
      }

      const montoDivisas = montoLocal / tipoCambio;
      const montoFinal = montoLocal - comision;

      return {
        montoDivisas: Math.round(montoDivisas * 100) / 100,
        montoFinal: Math.round(montoFinal * 100) / 100,
      };
    },
    []
  );

  return {
    calcularCompra,
    calcularVenta,
  };
}
