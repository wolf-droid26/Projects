import { CompraForm } from "../components/CompraForm";

export function CompraListPage() {
  return (
    <section className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-8 shadow-2xl">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">
            Operaciones
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
            Compras de Divisas
          </h1>

          <p className="mt-3 max-w-2xl text-slate-300">
            Registra compras de moneda extranjera, calcula el monto local,
            comisiones y total final de forma rápida.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg">
          <p className="text-sm text-slate-400">Compras hoy</p>
          <h2 className="mt-2 text-3xl font-bold text-white">12</h2>
          <p className="mt-1 text-sm text-emerald-400">+8% vs ayer</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg">
          <p className="text-sm text-slate-400">Volumen total</p>
          <h2 className="mt-2 text-3xl font-bold text-white">S/ 18,450</h2>
          <p className="mt-1 text-sm text-blue-400">Últimas 24 horas</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg">
          <p className="text-sm text-slate-400">Comisiones</p>
          <h2 className="mt-2 text-3xl font-bold text-white">S/ 320</h2>
          <p className="mt-1 text-sm text-amber-400">Acumulado del día</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl">
        <CompraForm />
      </div>
    </section>
  );
}