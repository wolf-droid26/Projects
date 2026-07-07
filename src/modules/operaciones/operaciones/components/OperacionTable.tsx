export const OperacionTable = () => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tipo</th>
          <th>Cliente</th>
          <th>Moneda</th>
          <th>Monto</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Compra</td>
          <td>Juan Pérez</td>
          <td>USD</td>
          <td>100</td>
        </tr>
      </tbody>
    </table>
  );
};