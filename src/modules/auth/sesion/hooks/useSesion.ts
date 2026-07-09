import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { sesionService } from "../services/sesionService";

export function useSesion() {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cerrarSesion = async () => {
    try {
      setLoading(true);
      setError(null);

      await sesionService.logout();

      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      localStorage.removeItem("rol");

      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cerrar sesión");
    } finally {
      setLoading(false);
    }
  };

  const obtenerUsuario = () => {
    return {
      token: localStorage.getItem("token"),
      usuario: localStorage.getItem("usuario"),
      rol: localStorage.getItem("rol"),
    };
  };

  const estaAutenticado = () => {
    return Boolean(localStorage.getItem("token"));
  };

  return {
    cerrarSesion,
    obtenerUsuario,
    estaAutenticado,
    isLoading,
    error,
  };
}