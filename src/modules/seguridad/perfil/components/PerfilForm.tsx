export const PerfilForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label">
          Usuario
        </label>

        <input
          id="usuario"
          type="text"
          className="form-control"
          placeholder="admin"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nombres" className="form-label">
          Nombres
        </label>

        <input
          id="nombres"
          type="text"
          className="form-control"
          placeholder="Juan"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="apellidos" className="form-label">
          Apellidos
        </label>

        <input
          id="apellidos"
          type="text"
          className="form-control"
          placeholder="Pérez"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="correo" className="form-label">
          Correo
        </label>

        <input
          id="correo"
          type="email"
          className="form-control"
          placeholder="correo@gmail.com"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>

        <input
          id="telefono"
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