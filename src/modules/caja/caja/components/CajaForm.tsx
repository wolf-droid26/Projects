export const CajaForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Nombre de Caja
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Caja Principal"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Saldo Inicial
        </label>

        <input
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