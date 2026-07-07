/**
 * Interfaces para el módulo de Recuperación de Contraseña
 */

export interface RecuperarPasswordFormInterface {
  email: string;
  codigoVerificacion: string;
  nuevaPassword: string;
  confirmarPassword: string;
}

export interface RecuperarPasswordResponse {
  mensaje: string;
}
