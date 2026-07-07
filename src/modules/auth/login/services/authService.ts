/**
 * Servicio de autenticación para Login
 * API: POST /api/auth/login
 */

import type { LoginFormInterface, LoginResponse } from '../interfaces/LoginForm';

export const authService = {
  /**
   * Autentica un usuario con email y contraseña
   * TODO: Implementar llamada POST a /api/auth/login
   */
  async login(credentials: LoginFormInterface): Promise<LoginResponse> {
    // Placeholder: simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log('[authService.login] Autenticando usuario:', credentials.email);

    // TODO: Reemplazar con llamada real a API
    // const response = await axios.post('/api/auth/login', credentials);
    // return response.data;

    // Simular respuesta de la API
    return {
      token: 'mock-token-123',
      usuario: credentials.email,
      rol: 'user',
    };
  },
};
