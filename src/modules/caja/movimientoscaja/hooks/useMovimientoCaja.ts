import { useCallback, useState } from "react";

import { movimientoCajaService } from "../services/movimientoCajaService";
import type {
  MovimientoCaja,
  MovimientoCajaFormData,
} from "../interfaces/MovimientoCaja";

export function useMovimientoCaja() {
  const [movimientos, setMovimientos] = useState<MovimientoCaja[]>([]);
  const [movimientoSeleccionado, setMovimientoSeleccionado] =
    useState<MovimientoCaja | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarMovimientos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await movimientoCajaService.getAll();
      setMovimientos(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al cargar movimientos de caja"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const buscarPorId = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await movimientoCajaService.getById(id);
      setMovimientoSeleccionado(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al buscar movimiento de caja"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const guardarMovimiento = async (data: MovimientoCajaFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await movimientoCajaService.save(data);

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al guardar movimiento de caja"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    movimientos,
    movimientoSeleccionado,
    isLoading,
    success,
    error,
    cargarMovimientos,
    buscarPorId,
    guardarMovimiento,
  };
}