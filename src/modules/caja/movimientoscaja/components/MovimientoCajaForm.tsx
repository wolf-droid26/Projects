export const MovimientoCajaForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="tipoMovimiento" className="form-label">
          Tipo de Movimiento
        </label>

        <select
          id="tipoMovimiento"
          className="form-select"
        >
          <option>Ingreso</option>
          <option>Egreso</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="concepto" className="form-label">
          Concepto
        </label>

        <input
          id="concepto"
          type="text"
          className="form-control"
          placeholder="Pago de servicios"
        />
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

      <div className="mb-3">
        <label htmlFor="fechaMovimiento" className="form-label">
          Fecha
        </label>

        <input
          id="fechaMovimiento"
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
}