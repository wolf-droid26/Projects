import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "../../modules/auth/login/pages/LoginPage";
import { DashboardPage } from "../../modules/administracion/dashboard/pages/DashboardPage";
import { ClienteListPage } from "../../modules/clientes/clientes/pages/ClienteListPage";
import { MonedaListPage } from "../../modules/finanzas/monedas/pages/MonedaListPage";
import { TipoCambioListPage } from "../../modules/finanzas/tipos-cambio/pages/TipoCambioListPage";
import { TipoCambioFormPage } from "../../modules/finanzas/tipos-cambio/pages/TipoCambioFormPage";
import {CompraListPage} from "../../modules/operaciones/compras/pages/CompraListPage";

import { MainLayout } from "../../shared/layouts/MainLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="clientes" element={<ClienteListPage />} />
          <Route path="monedas" element={<MonedaListPage />} />
          <Route path="tipos-cambio" element={<TipoCambioListPage />} />
          <Route path="tipos-cambio/nuevo" element={<TipoCambioFormPage />} />
          <Route path="compras" element={<CompraListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};