/**
 * Interface para Reportes
 */
export interface Reporte {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  fechaInicio: string;
  fechaFin: string;
  formato: "PDF" | "EXCEL";
  estado: boolean;
}

export type ReporteFormData = Omit<Reporte, "id">;