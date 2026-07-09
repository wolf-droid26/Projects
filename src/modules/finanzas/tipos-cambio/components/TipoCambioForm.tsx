/**
 * Componente TipoCambioForm
 * Formulario para configurar tipos de cambio diarios
 */
import { useTipoCambio } from "../hooks/useTipoCambio";
import { FormInput } from "@/shared/components/FormInput";
import { FormSelect } from "@/shared/components/FormSelect";

interface TipoCambioFormProps {
  onSuccess?: () => void;
}

const MONEDAS_OPCIONES = [
  { value: "USD", label: "Dólar Estadounidense (USD)" },
  { value: "EUR", label: "Euro (EUR)" },
  { value: "MXN", label: "Peso Mexicano (MXN)" },
  { value: "COP", label: "Peso Colombiano (COP)" },
];

export function TipoCambioForm({ onSuccess }: TipoCambioFormProps) {
  const { form, onSubmit, isLoading, success, error } = useTipoCambio();

  const precioCompra = form.watch("precioCompra") || 0;
  const precioVenta = form.watch("precioVenta") || 0;

  const margen = precioVenta - precioCompra;
  const margenPorcentaje =
    precioCompra > 0 ? ((margen / precioCompra) * 100).toFixed(2) : "0";

  const handleSubmit = async (data: Parameters<typeof onSubmit>[0]) => {
    await onSubmit(data);
    onSuccess?.();
  };

  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h1 className="mb-2 text-3xl font-bold text-white">
        Configurar Tipo de Cambio
      </h1>

      <p className="mb-8 text-slate-400">
        Actualiza los precios de compra y venta para hoy
      </p>

      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormSelect
            id="monedaOrigen"
            label="Moneda Origen"
            placeholder="Selecciona moneda origen"
            options={MONEDAS_OPCIONES}
            {...form.register("monedaOrigen")}
            error={form.formState.errors.monedaOrigen}
          />

          <FormSelect
            id="monedaDestino"
            label="Moneda Destino"
            placeholder="Selecciona moneda destino"
            options={MONEDAS_OPCIONES}
            {...form.register("monedaDestino")}
            error={form.formState.errors.monedaDestino}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormInput
            id="precioCompra"
            label="Precio Compra"
            type="number"
            step="0.0001"
            placeholder="0.0000"
            {...form.register("precioCompra", { valueAsNumber: true })}
            error={form.formState.errors.precioCompra}
          />

          <FormInput
            id="precioVenta"
            label="Precio Venta"
            type="number"
            step="0.0001"
            placeholder="0.0000"
            {...form.register("precioVenta", { valueAsNumber: true })}
            error={form.formState.errors.precioVenta}
          />
        </div>

        {precioCompra > 0 && precioVenta > 0 && (
          <div className="rounded-lg border border-emerald-700 bg-emerald-900/30 p-4">
            <p className="font-semibold text-emerald-300">
              Margen de Ganancia
            </p>
            <p className="text-sm text-emerald-200">
              {margen.toFixed(4)} ({margenPorcentaje}%)
            </p>
          </div>
        )}

        <FormInput
          id="fechaVigencia"
          label="Fecha de Vigencia"
          type="date"
          {...form.register("fechaVigencia")}
          error={form.formState.errors.fechaVigencia}
        />

        <div className="flex items-center gap-3">
          <input
            id="activo"
            type="checkbox"
            className="h-4 w-4"
            {...form.register("activo")}
          />

          <label htmlFor="activo" className="text-sm text-slate-300">
            Tipo de cambio activo
          </label>
        </div>

        {error && (
          <div className="rounded-lg border border-red-700 bg-red-900/30 p-4 text-sm text-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-lg border border-emerald-700 bg-emerald-900/30 p-4 text-sm text-emerald-200">
            ✓ Tipo de cambio guardado exitosamente
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition duration-200 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Guardando..." : "Guardar Tipo de Cambio"}
        </button>
      </form>
    </div>
  );
}