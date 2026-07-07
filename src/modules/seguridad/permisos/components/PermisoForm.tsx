export const PermisoForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Nombre del Permiso
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Registrar Usuario"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Descripción
        </label>

        <textarea
          className="form-control"
          rows={3}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-success"
      >
        Guardar Permiso
      </button>

    </form>
  );
};