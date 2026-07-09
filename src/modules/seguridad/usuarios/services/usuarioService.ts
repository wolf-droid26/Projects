/**
 * Servicio de Usuarios
 * API: GET/POST /api/seguridad/usuarios
 */

import type { UsuarioFormData } from "@/shared/schemas/formSchemas";

export const usuarioService = {
  /**
   * Guarda un nuevo usuario.
   * Todo: implementar POST /api/seguridad/usuarios.
   */
  async save(data: UsuarioFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[usuarioService.save] Guardando usuario:", data);
  },

  /**
   * Obtiene todos los usuarios.
   * Todo: implementar GET /api/seguridad/usuarios.
   */
  async getAll(): Promise<UsuarioFormData[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[usuarioService.getAll] Obteniendo usuarios");

    return [];
  },

  /**
   * Obtiene un usuario por ID.
   * Todo: implementar GET /api/seguridad/usuarios/:id.
   */
  async getById(id: string): Promise<UsuarioFormData | null> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[usuarioService.getById] Buscando usuario:", id);

    return null;
  },

  /**
   * Actualiza un usuario.
   * Todo: implementar PUT /api/seguridad/usuarios/:id.
   */
  async update(id: string, data: UsuarioFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[usuarioService.update] Actualizando usuario:", id, data);
  },

  /**
   * Elimina un usuario.
   * Todo: implementar DELETE /api/seguridad/usuarios/:id.
   */
  async delete(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[usuarioService.delete] Eliminando usuario:", id);
  },
};