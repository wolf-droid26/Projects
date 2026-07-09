import { useCallback, useState } from "react";

import { cajaService } from "../services/cajaService";
import type { Caja, CajaFormData } from "../interfaces/Caja";

export function useCaja() {
  const [cajas, setCajas] = useState<Caja[]>([]);
  const [cajaSeleccionada, setCajaSeleccionada] =
    useState<Caja | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarCajas = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await cajaService.getAll();
      setCajas(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al cargar cajas"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const buscarPorId = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await cajaService.getById(id);
      setCajaSeleccionada(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al buscar caja"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const guardarCaja = async (data: CajaFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await cajaService.save(data);

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al guardar caja"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    cajas,
    cajaSeleccionada,
    isLoading,
    success,
    error,
    cargarCajas,
    buscarPorId,
    guardarCaja,
  };
}