import { useEffect } from "react";

import { useTipoCambio } from "../hooks/useTipoCambio";

export function TipoCambioHistorialPage() {
  const { tiposCambio, isLoading, error, cargarTiposCambio } = useTipoCambio();

  useEffect(() => {
    void cargarTiposCambio();
  }, [cargarTiposCambio]);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl">
        <h1 className="text-3xl font-bold text-white">
          Historial de Tipos de Cambio
        </h1>
        <p className="mt-2 text-slate-400">
          Consulta los tipos de cambio registrados en el sistema.
        </p>
      </div>

      {isLoading && <p className="text-slate-300">Cargando historial...</p>}

      {error && (
        <div className="rounded-xl border border-red-700 bg-red-900/30 p-4 text-red-300">
          {error}
        </div>
      )}

      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
        {tiposCambio.length === 0 ? (
          <p className="text-center text-slate-400">
            No hay historial registrado.
          </p>
        ) : (
          <div className="space-y-3">
            {tiposCambio.map((tipo) => (
              <div
                key={tipo.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
              >
                <p className="font-semibold text-white">
                  {tipo.monedaOrigen} → {tipo.monedaDestino}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Compra: S/ {tipo.precioCompra.toFixed(4)} | Venta: S/{" "}
                  {tipo.precioVenta.toFixed(4)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}