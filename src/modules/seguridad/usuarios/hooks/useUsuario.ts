/**
 * Custom hook para Usuario
 */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { usuarioService } from "../services/usuarioService";
import { useFormSubmit } from "@/shared/hooks/useFormSubmit";
import {
  usuarioFormSchema,
  type UsuarioFormData,
} from "@/shared/schemas/formSchemas";

export function useUsuario() {
  const form = useForm<UsuarioFormData>({
    resolver: zodResolver(usuarioFormSchema) as never,
    defaultValues: {
      email: "",
      nombre: "",
      apellido: "",
      rol: "",
      estatus: true,
      password: "",
      confirmarPassword: "",
    },
    mode: "onChange",
  });

  const {
    setLoading,
    setError,
    setSuccess,
    isLoading,
    success,
    error,
  } = useFormSubmit();

  const onSubmit = async (data: UsuarioFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await usuarioService.save(data);

      setSuccess(true);

      form.reset();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al guardar usuario";

      setError(message);
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
}