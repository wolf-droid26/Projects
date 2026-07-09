import { CierreCajaForm } from "../components/CierreCajaForm";

export const CierreCajaListPage = () => {
  return (
    <div className="container mt-4">

      <h2>Cierre de Caja</h2>

      <CierreCajaForm />

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Inicial</th>
            <th>Final</th>
            <th>Diferencia</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>2026-06-02</td>
            <td>Administrador</td>
            <td>5000</td>
            <td>7500</td>
            <td>2500</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};