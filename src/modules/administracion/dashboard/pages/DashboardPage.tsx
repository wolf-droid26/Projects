import { useEffect } from "react";

import { useDashboard } from "../hooks/useDashboard";

interface WidgetProps {
  title: string;
  value: string | number;
}

const Widget = ({ title, value }: WidgetProps) => {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg transition hover:border-emerald-500">
      <div className="text-sm text-slate-400">{title}</div>
      <div className="mt-3 text-3xl font-bold text-white">{value}</div>
    </div>
  );
};

export const DashboardPage = () => {
  const { stats, isLoading, error, cargarDashboard } = useDashboard();

  useEffect(() => {
    cargarDashboard().catch(console.error);
  }, [cargarDashboard]);

  if (isLoading) {
    return (
      <div className="flex h-80 items-center justify-center text-white">
        Cargando Dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-700 bg-red-900/30 p-4 text-red-300">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
        <p className="mt-2 text-slate-400">
          Resumen general del sistema Casa de Cambio.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        <Widget title="Clientes" value={stats.totalClientes} />
        <Widget title="Compras Hoy" value={stats.comprasHoy} />
        <Widget title="Ventas Hoy" value={stats.ventasHoy} />
        <Widget title="Tipo de Cambio" value={`S/ ${stats.tipoCambioActual}`} />
        <Widget
          title="Saldo en Caja"
          value={`S/ ${stats.saldoCaja.toLocaleString()}`}
        />
      </div>
    </div>
  );
};