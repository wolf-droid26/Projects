export const RolForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">
          Nombre del Rol
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Administrador"
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
        className="btn btn-primary"
      >
        Guardar Rol
      </button>
    </form>
  );
};