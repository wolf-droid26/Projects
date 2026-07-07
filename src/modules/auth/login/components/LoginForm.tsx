/**
 * Componente LoginForm
 * Formulario para autenticación de usuarios
 * Ubicación: src/modules/auth/login/components/LoginForm.tsx
 */

import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { FormInput } from '@/shared/components/FormInput';

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const navigate = useNavigate();
  const { form, onSubmit, isLoading, success, error } = useLogin();

  const handleSubmit = async (data: any) => {
    const ok = await onSubmit(data);
    if (ok) {
      onSuccess?.() || navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md p-8 bg-slate-900 rounded-xl shadow-2xl border border-slate-800">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Casa de Cambios</h1>

        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Email */}
          <FormInput
            label="Email"
            type="email"
            placeholder="tu@email.com"
            {...form.register('email')}
            error={form.formState.errors.email}
          />

          {/* Password */}
          <FormInput
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            {...form.register('password')}
            error={form.formState.errors.password}
          />

          {/* Recuérdame */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="recuerdame"
              className="rounded border-slate-700 bg-slate-800 text-emerald-600 focus:ring-emerald-500"
              {...form.register('recuerdame')}
            />
            <label htmlFor="recuerdame" className="text-sm text-slate-300">
              Recuérdame
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="p-4 bg-emerald-900/30 border border-emerald-700 rounded-lg text-emerald-200 text-sm">
              ✓ Inicio de sesión exitoso
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition duration-200"
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>

          {/* Links */}
          <div className="text-center text-sm text-slate-400">
            ¿Olvidaste tu contraseña?{' '}
            <a href="/recuperar-password" className="text-emerald-500 hover:text-emerald-400">
              Recupérala aquí
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
