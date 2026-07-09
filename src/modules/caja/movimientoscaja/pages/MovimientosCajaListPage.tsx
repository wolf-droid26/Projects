import { MovimientoCajaForm } from "../components/MovimientoCajaForm";

export const MovimientoCajaListPage = () => {
  return (
    <div className="container mt-4">

      <h2>Movimientos de Caja</h2>

      <MovimientoCajaForm />

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Usuario</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Ingreso</td>
            <td>Compra de Divisas</td>
            <td>500</td>
            <td>2026-06-02</td>
            <td>admin</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};