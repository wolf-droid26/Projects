/**
 * Componente TipoCambioForm
 * Formulario para configurar tipos de cambio diarios
 */

import { useTipoCambio } from '../hooks/useTipoCambio';
import { FormInput } from '@/shared/components/FormInput';
import { FormSelect } from '@/shared/components/FormSelect';

interface TipoCambioFormProps {
  onSuccess?: () => void;
}

// TODO: Reemplazar con datos de monedaStore
const MONEDAS_OPCIONES = [
  { value: 'USD', label: 'Dólar Estadounidense (USD)' },
  { value: 'EUR', label: 'Euro (EUR)' },
  { value: 'MXN', label: 'Peso Mexicano (MXN)' },
  { value: 'COP', label: 'Peso Colombiano (COP)' },
];

export function TipoCambioForm({ onSuccess }: TipoCambioFormProps) {
  const { form, onSubmit, isLoading, success, error } = useTipoCambio();

  const handleSubmit = async (data: any) => {
    await onSubmit(data);
    if (success) {
      onSuccess?.();
    }
  };

  // Cálculos automáticos: mostrar margen
  const precioCompra = form.watch('precioCompra');
  const precioVenta = form.watch('precioVenta');
  const margen = precioVenta && precioCompra ? (precioVenta - precioCompra).toFixed(4) : '0.0000';
  const margenPorcentaje = precioCompra && precioVenta
    ? (((precioVenta - precioCompra) / precioCompra) * 100).toFixed(2)
    : '0';

  return (
    <div className="max-w-3xl mx-auto p-6 bg-slate-900 rounded-xl shadow-lg border border-slate-800">
      <h1 className="text-3xl font-bold text-white mb-2">Configurar Tipo de Cambio</h1>
      <p className="text-slate-400 mb-8">Actualiza los precios de compra y venta para hoy</p>

      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* Monedas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect
            label="Moneda Origen"
            placeholder="Selecciona moneda origen"
            options={MONEDAS_OPCIONES}
            {...form.register('monedaOrigen')}
            error={form.formState.errors.monedaOrigen}
          />

          <FormSelect
            label="Moneda Destino"
            placeholder="Selecciona moneda destino"
            options={MONEDAS_OPCIONES}
            {...form.register('monedaDestino')}
            error={form.formState.errors.monedaDestino}
          />
        </div>

        {/* Precios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Precio Compra"
            type="number"
            step="0.0001"
            placeholder="0.0000"
            {...form.register('precioCompra', { valueAsNumber: true })}
            error={form.formState.errors.precioCompra}
          />

          <FormInput
            label="Precio Venta"
            type="number"
            step="0.0001"
            placeholder="0.0000"
            {...form.register('precioVenta', { valueAsNumber: true })}
            error={form.formState.errors.precioVenta}
          />
        </div>

        {/* Margen (Información) */}
        {precioCompra && precioVenta && (
          <div className="p-4 bg-emerald-900/30 border border-emerald-700 rounded-lg">
            <p className="text-emerald-300 font-semibold">Margen de Ganancia</p>
            <p className="text-sm text-emerald-200">
              {margen} ({margenPorcentaje}%)
            </p>
          </div>
        )}

        {/* Fecha Vigencia */}
        <FormInput
          label="Fecha de Vigencia"
          type="date"
          {...form.register('fechaVigencia')}
          error={form.formState.errors.fechaVigencia}
        />

        {/* Errores */}
        {error && (
          <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-200 text-sm">
            {error}
          </div>
        )}

        {/* Éxito */}
        {success && (
          <div className="p-4 bg-emerald-900/30 border border-emerald-700 rounded-lg text-emerald-200 text-sm">
            ✓ Tipo de cambio guardado exitosamente
          </div>
        )}

        {/* Botón Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition duration-200"
        >
          {isLoading ? 'Guardando...' : 'Guardar Tipo de Cambio'}
        </button>
      </form>
    </div>
  );
}
