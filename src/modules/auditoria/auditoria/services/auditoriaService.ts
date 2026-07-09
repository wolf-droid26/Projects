export const auditoriaService = {
  async getAll() {
    return [];
  },

  async getById(id: string) {
    return {
      id,
      usuario: "",
      modulo: "",
      accion: "",
      descripcion: "",
      fecha: "",
    };
  },
};