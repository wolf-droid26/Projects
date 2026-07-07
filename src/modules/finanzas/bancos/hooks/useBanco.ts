import { useCallback, useState } from "react";

import { bancoService } from "../services/bancoService";
import type { Banco, BancoFormData } from "../interfaces/Banco";

export function useBanco() {
  const [bancos, setBancos] = useState<Banco[]>([]);
  const [bancoSeleccionado, setBancoSeleccionado] =
    useState<Banco | null>(null);

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarBancos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await bancoService.getAll();
      setBancos(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al cargar bancos"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const buscarBanco = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await bancoService.getById(id);
      setBancoSeleccionado(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al buscar banco"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const guardarBanco = async (data: BancoFormData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await bancoService.save(data);

      setSuccess(true);
      await cargarBancos();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al guardar banco"
      );
    } finally {
      setLoading(false);
    }
  };

  const actualizarBanco = async (
    id: string,
    data: BancoFormData
  ) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await bancoService.update(id, data);

      setSuccess(true);
      await cargarBancos();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al actualizar banco"
      );
    } finally {
      setLoading(false);
    }
  };

  const eliminarBanco = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      await bancoService.delete(id);

      setBancos((prev) => prev.filter((banco) => banco.id !== id));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al eliminar banco"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    bancos,
    bancoSeleccionado,
    isLoading,
    success,
    error,
    cargarBancos,
    buscarBanco,
    guardarBanco,
    actualizarBanco,
    eliminarBanco,
  };
}