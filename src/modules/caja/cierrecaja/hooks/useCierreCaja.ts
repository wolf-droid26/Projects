import { useCallback, useState } from "react";

import { cierreCajaService } from "../services/cierreCajaService";
import type { CierreCaja, CierreCajaFormData } from "../interfaces/CierreCaja";

export function useCierreCaja() {
  const [cierres, setCierres] = useState<CierreCaja[]>([]);
  const [cierreSeleccionado, setCierreSeleccionado] =
    useState<CierreCaja | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calcularDiferencia = (montoFinal: number, montoEsperado: number) => {
    return montoFinal - montoEsperado;
  };

  const cargarCierres = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await cierreCajaService.getAll();
      setCierres(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar cierres");
    } finally {
      setLoading(false);
    }
  }, []);

  const buscarPorId = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await cierreCajaService.getById(id);
      setCierreSeleccionado(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al buscar cierre");
    } finally {
      setLoading(false);
    }
  }, []);

  const guardarCierre = async (data: CierreCajaFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await cierreCajaService.save(data);

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar cierre");
    } finally {
      setLoading(false);
    }
  };

  return {
    cierres,
    cierreSeleccionado,
    isLoading,
    success,
    error,
    calcularDiferencia,
    cargarCierres,
    buscarPorId,
    guardarCierre,
  };
}