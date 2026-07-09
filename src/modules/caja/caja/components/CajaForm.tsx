export const CajaForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombreCaja" className="form-label">
          Nombre de Caja
        </label>

        <input
          id="nombreCaja"
          type="text"
          className="form-control"
          placeholder="Caja Principal"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="saldoInicial" className="form-label">
          Saldo Inicial
        </label>

        <input
          id="saldoInicial"
          type="number"
          className="form-control"
          placeholder="0.00"
        />
      </div>

      <button
        type="submit"
        className="btn btn-success"
      >
        Guardar Caja
      </button>
    </form>
  );
};