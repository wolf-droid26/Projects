import { useForm } from "react-hook-form";

import { monedaService } from "../services/monedaService";
import { useFormSubmit } from "@/shared/hooks/useFormSubmit";
import type { Moneda } from "../Interfaces/Moneda";

type MonedaFormData = Omit<Moneda, "id" | "fechaCreacion">;

export function useMoneda() {
  const form = useForm<MonedaFormData>({
    defaultValues: {
      nombre: "",
      codigo: "",
      simbolo: "",
      activa: true,
    },
    mode: "onChange",
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } =
    useFormSubmit();

  const onSubmit = async (data: MonedaFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await monedaService.save(data);

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar moneda");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
    success,
    error,
  };
};