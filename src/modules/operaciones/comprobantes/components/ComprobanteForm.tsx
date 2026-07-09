export const ComprobanteForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="numero" className="form-label">
          Número
        </label>

        <input
          id="numero"
          type="text"
          className="form-control"
          placeholder="CMP-0001"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tipo" className="form-label">
          Tipo
        </label>

        <select
          id="tipo"
          className="form-select"
        >
          <option>Boleta</option>
          <option>Factura</option>
          <option>Voucher</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="cliente" className="form-label">
          Cliente
        </label>

        <input
          id="cliente"
          type="text"
          className="form-control"
          placeholder="Cliente"
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

      <button
        type="submit"
        className="btn btn-primary"
      >
        Guardar Comprobante
      </button>
    </form>
  );
};