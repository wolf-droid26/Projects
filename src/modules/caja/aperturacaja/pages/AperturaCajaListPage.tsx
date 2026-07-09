import { AperturaCajaForm } from "../components/AperturaCajaForm";

export const AperturaCajaListPage = () => {
  return (
    <div className="container mt-4">

      <h2>Apertura de Caja</h2>

      <AperturaCajaForm />

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Monto Inicial</th>
            <th>Observación</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>2026-06-02</td>
            <td>Administrador</td>
            <td>5000</td>
            <td>Apertura normal</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};