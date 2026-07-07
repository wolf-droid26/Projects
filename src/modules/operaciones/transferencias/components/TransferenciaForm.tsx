export const TransferenciaForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Cuenta Origen
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Cuenta origen"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Cuenta Destino
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Cuenta destino"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Moneda
        </label>

        <select className="form-select">
          <option>PEN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
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

      <button
        type="submit"
        className="btn btn-primary"
      >
        Registrar Transferencia
      </button>

    </form>
  );
};