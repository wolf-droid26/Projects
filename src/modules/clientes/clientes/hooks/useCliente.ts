import { useForm } from "react-hook-form";

import { clienteService } from "../services/clienteService";
import type { ClienteForm } from "../Interfaces/ClienteForm";

export function useCliente() {
  const form = useForm<ClienteForm>({
    defaultValues: {
      nombres: "",
      apellidos: "",
      tipoDocumento: "",
      numeroDocumento: "",
      telefono: "",
      correo: "",
      direccion: "",
      estado: true,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: ClienteForm) => {
    await clienteService.save(data);
    form.reset();
  };

  return {
    form,
    onSubmit,
  };
}