import { useCallback, useState } from "react";

import { reporteService } from "../services/reporteService";
import type { Reporte } from "../interfaces/Reporte";

export function useReporte() {
  const [reportes, setReportes] = useState<Reporte[]>([]);
  const [reporteSeleccionado, setReporteSeleccionado] =
    useState<Reporte | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarReportes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await reporteService.getAll();
      setReportes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar reportes");
    } finally {
      setLoading(false);
    }
  }, []);

  const buscarReportePorId = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await reporteService.getById(id);
      setReporteSeleccionado(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al buscar reporte");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    reportes,
    reporteSeleccionado,
    isLoading,
    error,
    cargarReportes,
    buscarReportePorId,
  };
}