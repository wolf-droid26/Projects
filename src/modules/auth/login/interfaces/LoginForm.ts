/**
 * Interfaces para el módulo de Login
 */

export interface LoginFormInterface {
  email: string;
  password: string;
  recuerdame?: boolean;
}

export interface LoginResponse {
  token: string;
  usuario: string;
  rol: string;
}
