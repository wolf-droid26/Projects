import { useNavigate } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";
import { FormInput } from "@/shared/components/FormInput";

type LoginFormProps = Readonly<{
  onSuccess?: () => void;
}>;

export function LoginForm({ onSuccess }: LoginFormProps) {
  const navigate = useNavigate();
  const { form, onSubmit, isLoading, success, error } = useLogin();

  const handleSubmit = async (data: Parameters<typeof onSubmit>[0]) => {
    const ok = await onSubmit(data);

    if (!ok) return;

    if (onSuccess) {
      onSuccess();
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Casa de Cambios
        </h1>

        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="tu@email.com"
            {...form.register("email")}
            error={form.formState.errors.email}
          />

          <FormInput
            id="password"
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            {...form.register("password")}
            error={form.formState.errors.password}
          />

          <div className="flex items-center gap-2">
            <input
              id="recuerdame"
              type="checkbox"
              className="rounded border-slate-700 bg-slate-800 text-emerald-600 focus:ring-emerald-500"
              {...form.register("recuerdame")}
            />

            <label htmlFor="recuerdame" className="text-sm text-slate-300">
              Recuérdame
            </label>
          </div>

          {error && (
            <div className="rounded-lg border border-red-700 bg-red-900/30 p-4 text-sm text-red-200">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-lg border border-emerald-700 bg-emerald-900/30 p-4 text-sm text-emerald-200">
              ✓ Inicio de sesión exitoso
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition duration-200 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>

          <div className="text-center text-sm text-slate-400">
            ¿Olvidaste tu contraseña?{" "}
            <a
              href="/recuperar-password"
              className="text-emerald-500 hover:text-emerald-400"
            >
              Recupérala aquí
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}