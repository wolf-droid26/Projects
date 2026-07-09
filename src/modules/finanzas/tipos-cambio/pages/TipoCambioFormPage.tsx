import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useTipoCambio } from "../hooks/useTipoCambio";
import type { TipoCambioFormData } from "../Interfaces/TipoCambio";

export function TipoCambioFormPage() {
  const navigate = useNavigate();
  const { guardarTipoCambio, isLoading, success, error } = useTipoCambio();

  const form = useForm<TipoCambioFormData>({
    defaultValues: {
      monedaOrigen: "USD",
      monedaDestino: "PEN",
      precioCompra: 0,
      precioVenta: 0,
      fechaVigencia: new Date().toISOString().slice(0, 10),
      activo: true,
    },
  });

  const onSubmit = async (data: TipoCambioFormData) => {
    await guardarTipoCambio(data);

    setTimeout(() => {
      navigate("/tipos-cambio");
    }, 500);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl">
        <h1 className="text-3xl font-bold text-white">Nuevo Tipo de Cambio</h1>
        <p className="mt-2 text-slate-400">
          Registra el precio de compra y venta para una moneda.
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="monedaOrigen" className="text-sm text-slate-300">
              Moneda origen
            </label>

            <input
              id="monedaOrigen"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              {...form.register("monedaOrigen")}
            />
          </div>

          <div>
            <label htmlFor="monedaDestino" className="text-sm text-slate-300">
              Moneda destino
            </label>

            <input
              id="monedaDestino"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              {...form.register("monedaDestino")}
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="precioCompra" className="text-sm text-slate-300">
              Precio compra
            </label>

            <input
              id="precioCompra"
              type="number"
              step="0.0001"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              {...form.register("precioCompra", { valueAsNumber: true })}
            />
          </div>

          <div>
            <label htmlFor="precioVenta" className="text-sm text-slate-300">
              Precio venta
            </label>

            <input
              id="precioVenta"
              type="number"
              step="0.0001"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              {...form.register("precioVenta", { valueAsNumber: true })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="fechaVigencia" className="text-sm text-slate-300">
            Fecha vigencia
          </label>

          <input
            id="fechaVigencia"
            type="date"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
            {...form.register("fechaVigencia")}
          />
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4 text-slate-300">
          <input
            id="activo"
            type="checkbox"
            {...form.register("activo")}
          />

          <label htmlFor="activo">Tipo de cambio activo</label>
        </div>

        {error && (
          <div className="rounded-xl border border-red-700 bg-red-900/30 p-4 text-red-300">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-xl border border-emerald-700 bg-emerald-900/30 p-4 text-emerald-300">
            ✓ Tipo de cambio guardado
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500 disabled:opacity-60"
        >
          {isLoading ? "Guardando..." : "Guardar Tipo de Cambio"}
        </button>
      </form>
    </div>
  );
}