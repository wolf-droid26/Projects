/**
 * Interface para la sesión del usuario
 */

export interface Sesion {
  token: string;
  refreshToken?: string;
  usuario: UsuarioSesion;
  fechaInicio: string;
  fechaExpiracion: string;
  autenticado: boolean;
}

export interface UsuarioSesion {
  id: string;
  nombres: string;
  apellidos: string;
  correo: string;
  username: string;
  rol: string;
  estado: boolean;
}