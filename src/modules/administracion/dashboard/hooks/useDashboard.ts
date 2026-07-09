import { useCallback, useState } from "react";

interface DashboardStats {
  totalClientes: number;
  comprasHoy: number;
  ventasHoy: number;
  tipoCambioActual: number;
  saldoCaja: number;
}

export function useDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalClientes: 0,
    comprasHoy: 0,
    ventasHoy: 0,
    tipoCambioActual: 0,
    saldoCaja: 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarDashboard = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setStats({
        totalClientes: 150,
        comprasHoy: 12,
        ventasHoy: 8,
        tipoCambioActual: 3.72,
        saldoCaja: 18450,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al cargar el dashboard"
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    stats,
    isLoading,
    error,
    cargarDashboard,
  };
}