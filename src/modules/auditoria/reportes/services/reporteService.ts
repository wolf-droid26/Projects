/**
 * Servicio de Reportes
 * API: GET /api/reportes
 * API: POST /api/reportes
 */

import type { Reporte, ReporteFormData } from "../interfaces/Reporte";

export const reporteService = {
  /**
   * Obtener todos los reportes
   */
  async getAll(): Promise<Reporte[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return [
      {
        id: "1",
        nombre: "Reporte de Compras",
        descripcion: "Compras realizadas del día",
        tipo: "Compras",
        fechaInicio: "2026-01-01",
        fechaFin: "2026-01-31",
        formato: "PDF",
        estado: true,
      },
      {
        id: "2",
        nombre: "Reporte de Ventas",
        descripcion: "Ventas realizadas del día",
        tipo: "Ventas",
        fechaInicio: "2026-01-01",
        fechaFin: "2026-01-31",
        formato: "EXCEL",
        estado: true,
      },
    ];
  },

  /**
   * Buscar reporte por ID
   */
  async getById(id: string): Promise<Reporte> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      id,
      nombre: "Reporte General",
      descripcion: "Reporte generado automáticamente",
      tipo: "General",
      fechaInicio: "2026-01-01",
      fechaFin: "2026-01-31",
      formato: "PDF",
      estado: true,
    };
  },

  /**
   * Guardar reporte
   */
  async save(data: ReporteFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[reporteService.save]", data);
  },

  /**
   * Eliminar reporte
   */
  async delete(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("[reporteService.delete]", id);
  },
};