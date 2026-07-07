import type { RecuperarPasswordFormData } from "../hooks/useRecuperarPassword";

export const recuperarService = {
  async enviarCodigo(email: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[recuperarService.enviarCodigo]", email);
  },

  async recuperarPassword(data: RecuperarPasswordFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("[recuperarService.recuperarPassword]", data);
  },
};