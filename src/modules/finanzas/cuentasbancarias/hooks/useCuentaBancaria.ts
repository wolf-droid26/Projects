import { useCallback, useState } from "react";

import { cuentaBancariaService } from "../services/cuentaBancariaServices";
import type {
  CuentaBancaria,
  CuentaBancariaFormData,
} from "../interfaces/CuentaBancaria";

export function useCuentaBancaria() {
  const [cuentas, setCuentas] = useState<CuentaBancaria[]>([]);
  const [cuentaSeleccionada, setCuentaSeleccionada] =
    useState<CuentaBancaria | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarCuentas = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await cuentaBancariaService.getAll();
      setCuentas(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al cargar cuentas bancarias"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const buscarCuenta = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await cuentaBancariaService.getById(id);
      setCuentaSeleccionada(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al buscar cuenta bancaria"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const guardarCuenta = async (data: CuentaBancariaFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await cuentaBancariaService.save(data);

      setSuccess(true);
      await cargarCuentas();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al guardar cuenta bancaria"
      );
    } finally {
      setLoading(false);
    }
  };

  const actualizarCuenta = async (
    id: string,
    data: CuentaBancariaFormData
  ) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await cuentaBancariaService.update(id, data);

      setSuccess(true);
      await cargarCuentas();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al actualizar cuenta bancaria"
      );
    } finally {
      setLoading(false);
    }
  };

  const eliminarCuenta = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      await cuentaBancariaService.delete(id);

      setCuentas((prev) => prev.filter((cuenta) => cuenta.id !== id));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al eliminar cuenta bancaria"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    cuentas,
    cuentaSeleccionada,
    isLoading,
    success,
    error,
    cargarCuentas,
    buscarCuenta,
    guardarCuenta,
    actualizarCuenta,
    eliminarCuenta,
  };
}