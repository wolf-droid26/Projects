/**
 * Custom hook para Venta
 */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ventaService } from "../services/ventaService";
import { useFormSubmit } from "@/shared/hooks/useFormSubmit";
import { useCalculations } from "@/shared/hooks/useCalculations";
import {
  ventaFormSchema,
  type VentaFormData,
} from "@/shared/schemas/formSchemas";

export function useVenta() {
  const form = useForm<VentaFormData>({
    resolver: zodResolver(ventaFormSchema) as never,
    defaultValues: {
      clienteId: "",
      monedaId: "",
      montoLocal: 0,
      tipoCambioAplicado: 0,
      comision: 0,
    },
    mode: "onChange",
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } =
    useFormSubmit();

  const { calcularVenta } = useCalculations();

  const onSubmit = async (data: VentaFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await ventaService.save(data);

      setSuccess(true);

      setTimeout(() => {
        form.reset();
      }, 500);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al registrar venta";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    calcularVenta,
    isLoading,
    success,
    error,
  };
}