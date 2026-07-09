export interface Configuracion {
  id: string;
  nombreEmpresa: string;
  ruc: string;
  direccion: string;
  telefono: string;
  correo: string;
  monedaBase: string;
  tipoCambioAutomatico: boolean;
  comisionDefault: number;
  activo: boolean;
}