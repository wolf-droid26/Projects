import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { tipoCambioService } from "../services/tipoCambioService";
import type {
  TipoCambio,
  TipoCambioFormData,
} from "../Interfaces/TipoCambio";

export function useTipoCambio() {
  const form = useForm<TipoCambioFormData>({
    defaultValues: {
      monedaOrigen: "",
      monedaDestino: "",
      precioCompra: 0,
      precioVenta: 0,
      fechaVigencia: new Date().toISOString().slice(0, 10),
      activo: true,
    },
    mode: "onChange",
  });

  const [tiposCambio, setTiposCambio] = useState<TipoCambio[]>([]);
  const [tipoCambioSeleccionado, setTipoCambioSeleccionado] =
    useState<TipoCambio | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarTiposCambio = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await tipoCambioService.getAll();
      setTiposCambio(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar tipos de cambio");
    } finally {
      setLoading(false);
    }
  }, []);

  const cargarTiposActivos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await tipoCambioService.getActivos();
      setTiposCambio(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar tipos activos");
    } finally {
      setLoading(false);
    }
  }, []);

  const buscarTipoCambio = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await tipoCambioService.getById(id);
      setTipoCambioSeleccionado(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al buscar tipo de cambio");
    } finally {
      setLoading(false);
    }
  }, []);

  const guardarTipoCambio = async (data: TipoCambioFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await tipoCambioService.save(data);

      setSuccess(true);
      form.reset();
      await cargarTiposCambio();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar tipo de cambio");
    } finally {
      setLoading(false);
    }
  };

  const actualizarTipoCambio = async (id: string, data: TipoCambioFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await tipoCambioService.update(id, data);

      setSuccess(true);
      await cargarTiposCambio();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al actualizar tipo de cambio");
    } finally {
      setLoading(false);
    }
  };

  const eliminarTipoCambio = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      await tipoCambioService.delete(id);

      setTiposCambio((prev) => prev.filter((tipo) => tipo.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al eliminar tipo de cambio");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit: guardarTipoCambio,

    tiposCambio,
    tipoCambioSeleccionado,
    isLoading,
    success,
    error,

    cargarTiposCambio,
    cargarTiposActivos,
    buscarTipoCambio,
    guardarTipoCambio,
    actualizarTipoCambio,
    eliminarTipoCambio,
  };
}