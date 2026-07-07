import { useCallback, useState } from "react";

import { configuracionService } from "../services/configuracionService";
import type { Configuracion } from "../interfaces/Configuracion";

export function useConfiguracion() {
  const [configuracion, setConfiguracion] = useState<Configuracion | null>(
    null
  );

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const cargarConfiguracion = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const data = await configuracionService.get();

      setConfiguracion(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al cargar la configuración"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const guardarConfiguracion = async (data: Configuracion) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await configuracionService.save(data);

      setConfiguracion(data);
      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al guardar la configuración"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    configuracion,
    isLoading,
    error,
    success,
    cargarConfiguracion,
    guardarConfiguracion,
  };
}