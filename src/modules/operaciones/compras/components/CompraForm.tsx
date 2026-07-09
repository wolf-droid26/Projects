/**
 * Componente CompraForm
 * Formulario para registrar compra de divisas
 */
import { useMemo } from "react";

import { useCompra } from "../hooks/useCompra";
import { FormInput } from "@/shared/components/FormInput";
import { FormSelect } from "@/shared/components/FormSelect";
import { FormTextarea } from "@/shared/components/FormTextarea";

interface CompraFormProps {
  onSuccess?: () => void;
}

const CLIENTES_OPCIONES = [
  { value: "1", label: "Juan Pérez" },
  { value: "2", label: "María García" },
];

const MONEDAS_OPCIONES = [
  { value: "USD", label: "Dólar Estadounidense" },
  { value: "EUR", label: "Euro" },
];

export function CompraForm({ onSuccess }: CompraFormProps) {
  const { form, onSubmit, calcularCompra, isLoading, success, error } =
    useCompra();

  const montoDivisas = form.watch("montoDivisas") || 0;
  const tipoCambio = form.watch("tipoCambioAplicado") || 0;
  const comision = form.watch("comision") || 0;

  const calculos = useMemo(() => {
    return calcularCompra(montoDivisas, tipoCambio, comision);
  }, [montoDivisas, tipoCambio, comision, calcularCompra]);

  const handleSubmit = async (data: Parameters<typeof onSubmit>[0]) => {
    await onSubmit(data);
    onSuccess?.();
  };

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-100">
          Operación de compra
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          Compra de Divisas
        </h1>
        <p className="mt-2 text-emerald-50">
          Ingresa el monto, tipo de cambio y comisión. El sistema calcula el total automáticamente.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-6 p-6 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-3">
          <div className="grid gap-5 md:grid-cols-2">
            <FormSelect
              label="Cliente"
              placeholder="Selecciona cliente"
              options={CLIENTES_OPCIONES}
              {...form.register("clienteId")}
              error={form.formState.errors.clienteId}
            />

            <FormSelect
              label="Moneda"
              placeholder="Selecciona moneda"
              options={MONEDAS_OPCIONES}
              {...form.register("monedaId")}
              error={form.formState.errors.monedaId}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FormInput
              label="Monto en divisas"
              type="number"
              step="0.01"
              placeholder="100.00"
              {...form.register("montoDivisas", { valueAsNumber: true })}
              error={form.formState.errors.montoDivisas}
            />

            <FormInput
              label="Tipo de cambio"
              type="number"
              step="0.0001"
              placeholder="3.72"
              {...form.register("tipoCambioAplicado", { valueAsNumber: true })}
              error={form.formState.errors.tipoCambioAplicado}
            />
          </div>

          <FormInput
            label="Comisión"
            type="number"
            step="0.01"
            placeholder="0.00"
            {...form.register("comision", { valueAsNumber: true })}
            error={form.formState.errors.comision}
            helperText="Comisión en moneda local"
          />

          <FormTextarea
            label="Observaciones"
            placeholder="Notas adicionales sobre la compra"
            {...form.register("observaciones")}
            error={form.formState.errors.observaciones}
          />
        </div>

        <aside className="lg:col-span-2">
          <div className="sticky top-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Resumen automático</p>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400">Monto local</span>
                <strong className="text-white">
                  S/ {calculos.montoLocal.toFixed(2)}
                </strong>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400">Comisión</span>
                <strong className="text-amber-300">
                  S/ {comision.toFixed(2)}
                </strong>
              </div>

              <div className="rounded-2xl bg-emerald-500/10 p-4">
                <p className="text-sm text-emerald-300">Total final</p>
                <p className="mt-1 text-4xl font-bold text-emerald-300">
                  S/ {calculos.montoFinal.toFixed(2)}
                </p>
              </div>
            </div>

            {error && (
              <div className="mt-4 rounded-xl border border-red-700 bg-red-900/30 p-3 text-sm text-red-200">
                {error}
              </div>
            )}

            {success && (
              <div className="mt-4 rounded-xl border border-emerald-700 bg-emerald-900/30 p-3 text-sm text-emerald-200">
                ✓ Compra registrada exitosamente
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 w-full rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Registrando..." : "Registrar Compra"}
            </button>
          </div>
        </aside>
      </form>
    </div>
  );
}