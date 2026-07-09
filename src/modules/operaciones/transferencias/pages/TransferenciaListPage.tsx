import { TransferenciaForm } from "../components/TransferenciaForm";

export const TransferenciaListPage = () => {
  return (
    <div className="container mt-4">

      <h2>Transferencias</h2>

      <TransferenciaForm />

      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Monto</th>
            <th>Moneda</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>BCP-001</td>
            <td>INTERBANK-002</td>
            <td>1000</td>
            <td>USD</td>
            <td>Completada</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};