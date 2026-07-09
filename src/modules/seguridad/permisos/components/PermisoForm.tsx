export const PermisoForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombrePermiso" className="form-label">
          Nombre del Permiso
        </label>

        <input
          id="nombrePermiso"
          type="text"
          className="form-control"
          placeholder="Registrar Usuario"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="descripcionPermiso" className="form-label">
          Descripción
        </label>

        <textarea
          id="descripcionPermiso"
          className="form-control"
          rows={3}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Guardar Permiso
      </button>
    </form>
  );
};