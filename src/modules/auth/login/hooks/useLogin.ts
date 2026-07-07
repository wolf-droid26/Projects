import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/authStore";
import { useFormSubmit } from "@/shared/hooks/useFormSubmit";
import { authService } from "../services/authService";
import type { LoginFormInterface } from "../interfaces/LoginForm";

export function useLogin() {
  const navigate = useNavigate();

  const form = useForm<LoginFormInterface>({
    defaultValues: {
      email: "",
      password: "",
      recuerdame: false,
    },
    mode: "onChange",
  });

  const { setLoading, setError, setSuccess, isLoading, success, error } =
    useFormSubmit();

  const login = useAuthStore((state) => state.login);

  const onSubmit = async (data: LoginFormInterface) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const response = await authService.login(data);

      if (!response.token) {
        throw new Error("Respuesta inválida del servidor");
      }

      localStorage.setItem("token", response.token);
      localStorage.setItem("usuario", response.usuario);
      localStorage.setItem("rol", response.rol);

      login(response.usuario);

      setSuccess(true);
      navigate("/dashboard");

      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al iniciar sesión");
      return false;
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