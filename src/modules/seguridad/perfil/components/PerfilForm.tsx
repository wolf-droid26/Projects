export const PerfilForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label className="form-label">
          Usuario
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="admin"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Nombres
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Juan"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Apellidos
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Pérez"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Correo
        </label>

        <input
          type="email"
          className="form-control"
          placeholder="correo@gmail.com"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Teléfono
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="999999999"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Actualizar Perfil
      </button>

    </form>
  );
};