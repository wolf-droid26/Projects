import { useState } from "react";
import { useForm } from "react-hook-form";

import { recuperarService } from "../services/recuperarService";
import { useFormSubmit } from "@/shared/hooks/useFormSubmit";

export interface RecuperarPasswordFormData {
  email: string;
  codigoVerificacion: string;
  nuevaPassword: string;
  confirmarPassword: string;
}

export function useRecuperarPassword() {
  const [step, setStep] = useState<"email" | "codigo" | "nueva-password">(
    "email"
  );

  const [emailEnviado, setEmailEnviado] = useState("");

  const form = useForm<RecuperarPasswordFormData>({
    defaultValues: {
      email: "",
      codigoVerificacion: "",
      nuevaPassword: "",
      confirmarPassword: "",
    },
    mode: "onChange",
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } =
    useFormSubmit();

  const enviarCodigo = async (email: string) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await recuperarService.enviarCodigo(email);

      setEmailEnviado(email);
      setStep("codigo");
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el código");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: RecuperarPasswordFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      if (data.nuevaPassword !== data.confirmarPassword) {
        throw new Error("Las contraseñas no coinciden");
      }

      await recuperarService.recuperarPassword(data);

      setSuccess(true);
      setStep("nueva-password");
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al recuperar la contraseña"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    enviarCodigo,
    step,
    emailEnviado,
    isLoading,
    success,
    error,
  };
}