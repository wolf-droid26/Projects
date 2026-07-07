import { z } from 'zod';

/**
 * Esquemas Zod reutilizables para validación de formularios
 * Siguiendo el patrón DDD del proyecto Casa de Cambios
 */

// ============ VALIDACIONES COMUNES ============
export const emailSchema = z.string().email('Email inválido').min(1, 'Email requerido');

export const passwordSchema = z
  .string()
  .min(8, 'La contraseña debe tener al menos 8 caracteres')
  .regex(/[A-Z]/, 'Debe incluir al menos una mayúscula')
  .regex(/[0-9]/, 'Debe incluir al menos un número');

export const numeroDocumentoSchema = z
  .string()
  .min(6, 'Número de documento inválido')
  .max(20, 'Número de documento muy largo');

export const montoSchema = z
  .number()
  .positive('El monto debe ser mayor a 0')
  .refine((val) => !isNaN(val), 'Monto inválido');

export const codigoSchema = z
  .string()
  .min(3, 'Código debe tener al menos 3 caracteres')
  .max(3, 'Código debe tener máximo 3 caracteres')
  .regex(/^[A-Z]+$/, 'Código debe contener solo letras mayúsculas');

// ============ AUTH SCHEMAS ============

export const loginFormSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Contraseña requerida'),
  recuerdame: z.boolean().optional().default(false),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export const recuperarPasswordFormSchema = z
  .object({
    email: emailSchema,
    correoVerificacion: z.string().optional(),
    codigoVerificacion: z
      .string()
      .min(6, 'Código debe tener 6 caracteres')
      .max(6, 'Código debe tener 6 caracteres')
      .regex(/^\d+$/, 'Código debe contener solo números'),
    nuevaPassword: passwordSchema,
    confirmarPassword: z.string(),
  })
  .refine((data) => data.nuevaPassword === data.confirmarPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmarPassword'],
  });

export type RecuperarPasswordFormData = z.infer<typeof recuperarPasswordFormSchema>;

// ============ FINANZAS SCHEMAS ============

export const tipoCambioFormSchema = z
  .object({
    monedaOrigen: z.string().min(1, 'Moneda origen requerida'),
    monedaDestino: z.string().min(1, 'Moneda destino requerida'),
    precioCompra: montoSchema,
    precioVenta: montoSchema,
    fechaVigencia: z.string().min(1, 'Fecha vigencia requerida'),
  })
  .refine((data) => data.precioVenta >= data.precioCompra, {
    message: 'Precio venta debe ser mayor o igual a precio compra',
    path: ['precioVenta'],
  });

export type TipoCambioFormData = z.infer<typeof tipoCambioFormSchema>;

export const monedaFormSchema = z.object({
  nombre: z.string().min(1, 'Nombre requerido').max(50, 'Nombre muy largo'),
  codigo: codigoSchema,
  simbolo: z.string().min(1, 'Símbolo requerido').max(5, 'Símbolo muy largo'),
  activa: z.boolean().default(true),
});

export type MonedaFormData = z.infer<typeof monedaFormSchema>;

// ============ CLIENTES SCHEMAS ============

export const clienteFormSchema = z.object({
  tipoDocumento: z.string().min(1, 'Tipo de documento requerido'),
  numeroDocumento: numeroDocumentoSchema,
  nombre: z.string().min(1, 'Nombre requerido').max(50, 'Nombre muy largo'),
  apellido: z.string().min(1, 'Apellido requerido').max(50, 'Apellido muy largo'),
  email: emailSchema.optional().or(z.literal('')),
  telefono: z
    .string()
    .regex(/^\d{7,15}$/, 'Teléfono inválido')
    .optional()
    .or(z.literal('')),
  direccion: z.string().optional(),
  ciudad: z.string().optional(),
});

export type ClienteFormData = z.infer<typeof clienteFormSchema>;

// ============ OPERACIONES SCHEMAS ============

export const compraFormSchema = z.object({
  clienteId: z.string().min(1, 'Cliente requerido'),
  monedaId: z.string().min(1, 'Moneda requerida'),
  montoDivisas: montoSchema,
  tipoCambioAplicado: montoSchema,
  comision: z.number().nonnegative('Comisión no puede ser negativa').default(0),
  observaciones: z.string().optional(),
});

export type CompraFormData = z.infer<typeof compraFormSchema>;

export const ventaFormSchema = z.object({
  clienteId: z.string().min(1, 'Cliente requerido'),
  monedaId: z.string().min(1, 'Moneda requerida'),
  montoLocal: montoSchema,
  tipoCambioAplicado: montoSchema,
  comision: z.number().nonnegative('Comisión no puede ser negativa').default(0),
  observaciones: z.string().optional(),
});

export type VentaFormData = z.infer<typeof ventaFormSchema>;

// ============ CAJA SCHEMAS ============

export const aperturaCajaFormSchema = z.object({
  usuarioId: z.string().min(1, 'Usuario requerido'),
  montoInicial: montoSchema,
  observaciones: z.string().optional(),
  monedas: z
    .array(
      z.object({
        monedaId: z.string(),
        monto: montoSchema,
      })
    )
    .optional(),
});

export type AperturaCajaFormData = z.infer<typeof aperturaCajaFormSchema>;

export const cierreCajaFormSchema = z.object({
  usuarioId: z.string().min(1, 'Usuario requerido'),
  monedas: z
    .array(
      z.object({
        monedaId: z.string(),
        montoFinal: montoSchema,
      })
    )
    .optional(),
  observaciones: z.string().optional(),
});

export type CierreCajaFormData = z.infer<typeof cierreCajaFormSchema>;

// ============ SEGURIDAD SCHEMAS ============

export const usuarioFormSchema = z
  .object({
    email: emailSchema,
    nombre: z.string().min(1, 'Nombre requerido').max(50, 'Nombre muy largo'),
    apellido: z.string().min(1, 'Apellido requerido').max(50, 'Apellido muy largo'),
    rol: z.string().min(1, 'Rol requerido'),
    estatus: z.boolean().default(true),
    password: passwordSchema.optional(),
    confirmarPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.password && !data.confirmarPassword) return false;
      if (data.password !== data.confirmarPassword) return false;
      return true;
    },
    {
      message: 'Las contraseñas no coinciden',
      path: ['confirmarPassword'],
    }
  );

export type UsuarioFormData = z.infer<typeof usuarioFormSchema>;
