/**
 * Custom hook para Compra
 */

import { useForm } from "react-hook-form";

import { compraService } from "../services/compraService";
import { useFormSubmit } from "@/shared/hooks/useFormSubmit";
import { useCalculations } from "@/shared/hooks/useCalculations";

import type { Compra } from "../interfaces/Compra";

type CompraFormData = Omit<
  Compra,
  "id" | "fechaCreacion" | "montoLocal" | "montoFinal"
>;

export function useCompra() {
  const form = useForm<CompraFormData>({
    defaultValues: {
      clienteId: "",
      monedaId: "",
      montoDivisas: 0,
      tipoCambioAplicado: 0,
      comision: 0,
      observaciones: "",
    },
    mode: "onChange",
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } =
    useFormSubmit();

  const { calcularCompra } = useCalculations();

  const onSubmit = async (data: CompraFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await compraService.save(data);

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al registrar compra"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    calcularCompra,
    isLoading,
    success,
    error,
  };
}