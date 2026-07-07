export const MovimientoCajaForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Tipo de Movimiento
        </label>

        <select className="form-select">
          <option>Ingreso</option>
          <option>Egreso</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Concepto
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Pago de servicios"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Monto
        </label>

        <input
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Fecha
        </label>

        <input
          type="date"
          className="form-control"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Registrar Movimiento
      </button>

    </form>
  );
};