import { useCallback, useState } from "react";

import { clienteService } from "../services/clienteService";
import type { Cliente } from "../Interfaces/Cliente";

export function useClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarClientes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await clienteService.getAll();
      setClientes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar clientes");
    } finally {
      setLoading(false);
    }
  }, []);

  const eliminarCliente = async (id: string) => {
    await clienteService.delete(id);
    setClientes((prev) => prev.filter((cliente) => cliente.id !== id));
  };

  return {
    clientes,
    isLoading,
    error,
    cargarClientes,
    eliminarCliente,
  };
}