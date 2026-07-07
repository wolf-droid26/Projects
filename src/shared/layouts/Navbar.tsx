import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm px-3 py-2 rounded-md ${
      isActive
        ? "bg-slate-800 text-emerald-400"
        : "text-slate-300 hover:text-emerald-300"
    }`;

  return (
    <header className="w-full bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-bold text-white">CasaCambio</div>

          <nav className="flex items-center gap-4">
            <NavLink to="/dashboard" className={linkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/clientes" className={linkClass}>
              Clientes
            </NavLink>

            <NavLink to="/monedas" className={linkClass}>
              Monedas
            </NavLink>

            <NavLink to="/compras" className={linkClass}>
              Compras
            </NavLink>

            <NavLink to="/tipos-cambio" className={linkClass}>
              Tipos de Cambio
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};