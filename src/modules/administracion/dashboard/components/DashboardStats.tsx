import { DashboardCard } from "./DashboardCard";

export const DashboardStats = () => {
  return (
    <div className="row">

      <div className="col-md-4">
        <DashboardCard
          titulo="Total Clientes"
          valor={150}
        />
      </div>

      <div className="col-md-4">
        <DashboardCard
          titulo="Compras Hoy"
          valor={45}
        />
      </div>

      <div className="col-md-4">
        <DashboardCard
          titulo="Ventas Hoy"
          valor={38}
        />
      </div>

      <div className="col-md-6">
        <DashboardCard
          titulo="Tipo de Cambio"
          valor="3.75"
        />
      </div>

      <div className="col-md-6">
        <DashboardCard
          titulo="Saldo en Caja"
          valor="S/ 25,000"
        />
      </div>

    </div>
  );
};