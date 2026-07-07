import { useCallback, useState } from "react";

import { auditoriaService } from "../services/auditoriaService";
import type { Auditoria } from "../interfaces/Auditoria";

export function useAuditoria() {
  const [auditorias, setAuditorias] = useState<Auditoria[]>([]);
  const [auditoriaSeleccionada, setAuditoriaSeleccionada] =
    useState<Auditoria | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarAuditorias = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await auditoriaService.getAll();
      setAuditorias(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al cargar auditorías"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const buscarPorId = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await auditoriaService.getById(id);
      setAuditoriaSeleccionada(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al buscar auditoría"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    auditorias,
    auditoriaSeleccionada,
    isLoading,
    error,
    cargarAuditorias,
    buscarPorId,
  };
}