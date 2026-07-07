import { useState, useCallback } from 'react';

/**
 * Hook genérico para manejo de carga, éxito y errores en formularios
 * Proporciona estado reutilizable para cualquier operación async
 */
export interface UseFormSubmitResult {
  isLoading: boolean;
  success: boolean;
  error: string | null;
  resetState: () => void;
  setLoading: (value: boolean) => void;
  setSuccess: (value: boolean) => void;
  setError: (value: string | null) => void;
}

export function useFormSubmit(): UseFormSubmitResult {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetState = useCallback(() => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  }, []);

  return {
    isLoading,
    success,
    error,
    resetState,
    setLoading,
    setSuccess,
    setError,
  };
}
