import { useNavigate } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

type LoginFormProps = Readonly<{
  onSuccess?: () => void;
}>;

export function LoginForm({ onSuccess }: LoginFormProps) {
  const navigate = useNavigate();
  const { form, onSubmit, isLoading, error } = useLogin();

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
    <main className="grid min-h-screen grid-cols-1 bg-[#1b1d1f] text-white lg:grid-cols-2">
      <section className="relative hidden items-center justify-center overflow-hidden bg-[#a0062d] lg:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b70735]/95 via-[#860024]/90 to-[#25000f]/95" />

        <div className="relative z-10 max-w-2xl px-12 text-center">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-4xl font-bold">
            $
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight">
            Nova Cambio
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-white/90">
            El tipo de cambio digital, seguro, rápido y al alcance de todos.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold">Iniciar Sesión</h2>

          <p className="mt-2 text-slate-400">
            Ingresa con tu correo electrónico
          </p>

          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="mt-8 space-y-5"
          >
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-4 text-white outline-none transition placeholder:text-slate-400 focus:border-red-500"
              {...form.register("email")}
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-4 text-white outline-none transition placeholder:text-slate-400 focus:border-red-500"
              {...form.register("password")}
            />

            {error && (
              <div className="rounded-xl border border-red-700 bg-red-900/30 p-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-[#b4072f] py-4 font-bold text-white transition hover:bg-[#c90b38] disabled:opacity-60"
            >
              {isLoading ? "Ingresando..." : "Ingresar a mi cuenta"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}