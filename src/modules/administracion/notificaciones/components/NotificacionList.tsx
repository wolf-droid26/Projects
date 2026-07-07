export const NotificacionList = () => {
  return (
    <div className="card">

      <div className="card-header">
        Notificaciones
      </div>

      <ul className="list-group list-group-flush">

        <li className="list-group-item">
          <strong>Nuevo Cliente</strong>
          <br />
          Se registró un nuevo cliente.
        </li>

        <li className="list-group-item">
          <strong>Tipo de Cambio</strong>
          <br />
          El tipo de cambio fue actualizado.
        </li>

      </ul>

    </div>
  );
};