import { useUsuario } from "../hooks/useUsuario";
import { FormInput } from "@/shared/components/FormInput";
import { FormSelect } from "@/shared/components/FormSelect";

type UsuarioFormProps = Readonly<{
  onSuccess?: () => void;
  isEdit?: boolean;
}>;

const ROLES_OPCIONES = [
  { value: "ADMIN", label: "Administrador" },
  { value: "CAJERO", label: "Cajero" },
  { value: "OPERADOR", label: "Operador de Cambio" },
  { value: "AUDITOR", label: "Auditor" },
];

export function UsuarioForm({ onSuccess, isEdit = false }: UsuarioFormProps) {
  const { form, onSubmit, isLoading, success, error } = useUsuario();

  const buttonText = isLoading
    ? "Guardando..."
    : isEdit
      ? "Actualizar Usuario"
      : "Crear Usuario";

  const handleSubmit = async (data: Parameters<typeof onSubmit>[0]) => {
    await onSubmit(data);
    onSuccess?.();
  };

  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h1 className="mb-2 text-3xl font-bold text-white">
        {isEdit ? "Editar Usuario" : "Crear Nuevo Usuario"}
      </h1>

      <p className="mb-8 text-slate-400">Gestiona los usuarios del sistema</p>

      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="usuario@example.com"
          disabled={isEdit}
          {...form.register("email")}
          error={form.formState.errors.email}
          helperText="El email será el identificador único del usuario"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormInput
            id="nombre"
            label="Nombre"
            type="text"
            placeholder="Juan"
            {...form.register("nombre")}
            error={form.formState.errors.nombre}
          />

          <FormInput
            id="apellido"
            label="Apellido"
            type="text"
            placeholder="Pérez"
            {...form.register("apellido")}
            error={form.formState.errors.apellido}
          />
        </div>

        <FormSelect
          id="rol"
          label="Rol"
          placeholder="Selecciona un rol"
          options={ROLES_OPCIONES}
          {...form.register("rol")}
          error={form.formState.errors.rol}
        />

        {!isEdit && (
          <>
            <div className="border-t border-slate-700 pt-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Contraseña
              </h3>
            </div>

            <FormInput
              id="password"
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              {...form.register("password")}
              error={form.formState.errors.password}
              helperText="Mínimo 8 caracteres, 1 mayúscula y 1 número"
            />

            <FormInput
              id="confirmarPassword"
              label="Confirmar Contraseña"
              type="password"
              placeholder="••••••••"
              {...form.register("confirmarPassword")}
              error={form.formState.errors.confirmarPassword}
            />
          </>
        )}

        <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4">
          <input
            id="estatus"
            type="checkbox"
            className="h-5 w-5 cursor-pointer rounded border-slate-700 bg-slate-800 text-emerald-600 focus:ring-emerald-500"
            {...form.register("estatus")}
          />

          <label
            htmlFor="estatus"
            className="cursor-pointer font-medium text-slate-300"
          >
            Usuario activo
          </label>
        </div>

        {error && (
          <div className="rounded-lg border border-red-700 bg-red-900/30 p-4 text-sm text-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-lg border border-emerald-700 bg-emerald-900/30 p-4 text-sm text-emerald-200">
            ✓ Usuario guardado exitosamente
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition duration-200 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}