import type { Configuracion } from "../interfaces/Configuracion";

export const configuracionService = {
  async get(): Promise<Configuracion> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id: "1",
      nombreEmpresa: "Casa Cambio Perú",
      ruc: "20123456789",
      direccion: "Av. Principal 123",
      telefono: "999999999",
      correo: "contacto@casacambio.pe",
      monedaBase: "PEN",
      tipoCambioAutomatico: true,
      comisionDefault: 5,
      activo: true,
    };
  },

  async save(data: Configuracion): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[configuracionService.save]", data);
  },
};