export const RolForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombreRol" className="form-label">
          Nombre del Rol
        </label>

        <input
          id="nombreRol"
          type="text"
          className="form-control"
          placeholder="Administrador"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="descripcionRol" className="form-label">
          Descripción
        </label>

        <textarea
          id="descripcionRol"
          className="form-control"
          rows={3}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar Rol
      </button>
    </form>
  );
};