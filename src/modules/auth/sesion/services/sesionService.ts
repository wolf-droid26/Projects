export const sesionService = {
  async logout(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[sesionService.logout] Sesión cerrada");
  },
};