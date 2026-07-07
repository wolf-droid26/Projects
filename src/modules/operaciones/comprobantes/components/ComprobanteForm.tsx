export const ComprobanteForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Número
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="CMP-0001"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Tipo
        </label>

        <select className="form-select">
          <option>Boleta</option>
          <option>Factura</option>
          <option>Voucher</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Cliente
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Cliente"
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

      <button
        type="submit"
        className="btn btn-primary"
      >
        Guardar Comprobante
      </button>

    </form>
  );
};