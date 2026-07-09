/**
 * Servicio de Usuarios
 * API: GET/POST /api/seguridad/usuarios
 */

import type { UsuarioFormData } from '@/shared/schemas/formSchemas';

export const usuarioService = {
  /**
   * Guarda un nuevo usuario
   * TODO: Implementar POST a /api/seguridad/usuarios
   */
  async save(data: UsuarioFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[usuarioService.save] Guardando usuario:', data);
  },

  /**
   * Obtiene todos los usuarios
   * TODO: Implementar GET a /api/seguridad/usuarios
   */
  async getAll(): Promise<any[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[usuarioService.getAll] Obteniendo usuarios');
    return [];
  },
};\n