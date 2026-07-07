import { useCallback, useState } from "react";

import { aperturaCajaService } from "../services/aperturaCajaService";
import type {
  AperturaCaja,
  AperturaCajaFormData,
} from "../interfaces/AperturaCaja";

export function useAperturaCaja() {
  const [aperturas, setAperturas] = useState<AperturaCaja[]>([]);
  const [aperturaSeleccionada, setAperturaSeleccionada] =
    useState<AperturaCaja | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarAperturas = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await aperturaCajaService.getAll();

      setAperturas(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al cargar aperturas"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const buscarPorId = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await aperturaCajaService.getById(id);

      setAperturaSeleccionada(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al buscar apertura"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const guardarApertura = async (
    data: AperturaCajaFormData
  ) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await aperturaCajaService.save(data);

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al guardar apertura"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    aperturas,
    aperturaSeleccionada,
    isLoading,
    success,
    error,
    cargarAperturas,
    buscarPorId,
    guardarApertura,
  };
}