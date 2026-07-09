/**
 * Servicio de autenticación
 * API: POST /api/auth/login
 */

import type {
  LoginFormInterface,
  LoginResponse,
} from "../interfaces/LoginForm";

export const authService = {
  /**
   * Autentica un usuario.
   * Pendiente: conectar con el backend.
   */
  async login(
    credentials: LoginFormInterface
  ): Promise<LoginResponse> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log(
      "[authService.login] Autenticando usuario:",
      credentials.email
    );

    /*
    Cuando el backend esté listo:

    const response = await axios.post(
      "/api/auth/login",
      credentials
    );

    return response.data;
    */

    return {
      token: "mock-token-123",
      usuario: credentials.email,
      rol: "user",
    };
  },
};