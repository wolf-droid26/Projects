export const TransferenciaForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="cuentaOrigen" className="form-label">
          Cuenta Origen
        </label>

        <input
          id="cuentaOrigen"
          type="text"
          className="form-control"
          placeholder="Cuenta origen"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cuentaDestino" className="form-label">
          Cuenta Destino
        </label>

        <input
          id="cuentaDestino"
          type="text"
          className="form-control"
          placeholder="Cuenta destino"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="moneda" className="form-label">
          Moneda
        </label>

        <select
          id="moneda"
          className="form-select"
        >
          <option>PEN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="monto" className="form-label">
          Monto
        </label>

        <input
          id="monto"
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