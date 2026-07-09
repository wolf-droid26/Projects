import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTipoCambio } from "../hooks/useTipoCambio";

export function TipoCambioListPage() {
  const {
    tiposCambio,
    isLoading,
    error,
    cargarTiposCambio,
    eliminarTipoCambio,
  } = useTipoCambio();

  useEffect(() => {
    cargarTiposCambio().catch(console.error);
  }, [cargarTiposCambio]);

  const handleEliminar = (id: string) => {
    eliminarTipoCambio(id).catch(console.error);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl">
        <div>
          <h1 className="text-3xl font-bold text-white">Tipos de Cambio</h1>

          <p className="mt-2 text-slate-400">
            Administra precios de compra y venta de monedas.
          </p>
        </div>

        <Link
          to="/tipos-cambio/nuevo"
          className="rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500"
        >
          Nuevo Tipo
        </Link>
      </div>

      {isLoading && <p className="text-slate-300">Cargando...</p>}

      {error && (
        <div className="rounded-xl border border-red-700 bg-red-900/30 p-4 text-red-300">
          {error}
        </div>
      )}

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-sm text-slate-400">
            <tr>
              <th className="p-4">Origen</th>
              <th className="p-4">Destino</th>
              <th className="p-4">Compra</th>
              <th className="p-4">Venta</th>
              <th className="p-4">Vigencia</th>
              <th className="p-4">Estado</th>
              <th className="p-4 text-right">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {tiposCambio.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-6 text-center text-slate-400">
                  No hay tipos de cambio registrados.
                </td>
              </tr>
            ) : (
              tiposCambio.map((tipo) => (
                <tr
                  key={tipo.id}
                  className="border-t border-slate-800 text-slate-200"
                >
                  <td className="p-4">{tipo.monedaOrigen}</td>
                  <td className="p-4">{tipo.monedaDestino}</td>
                  <td className="p-4">S/ {tipo.precioCompra.toFixed(4)}</td>
                  <td className="p-4">S/ {tipo.precioVenta.toFixed(4)}</td>
                  <td className="p-4">
                    {new Date(tipo.fechaVigencia).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    {tipo.activo ? "Activo" : "Inactivo"}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleEliminar(tipo.id)}
                      className="rounded-xl bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-500"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}