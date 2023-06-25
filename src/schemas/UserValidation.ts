import { z } from 'zod'
const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

export const UserValidation = z.object({
    name: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(10, 'El nombre debe tener menos de 10 caracteres'),
    lastName: z
    .string()
    .min(3, 'El apellido debe tener al menos 3 caracteres')
    .max(10, 'El apellido debe tener menos de 10 caracteres'),
    email: z
    .string()
    .min(5, 'El correo electrónico debe tener al menos 5 caracteres')
    .max(30, 'El correo electrónico debe tener menos de 30 caracteres')
    .refine((value) => emailRegex.test(value), {
      message: 'Debe proporcionar un correo electrónico válido',
      path: ['email'],
    }),    
    country: z  
    .string()
    .min(3, 'El país debe tener al menos 3 caracteres')
    .max(10, 'El país debe tener menos de 10 caracteres'),
    city: z  
    .string()
    .min(3, 'La ciudad debe tener al menos 3 caracteres')
    .max(10, 'La ciudad debe tener menos de 10 caracteres'),
    aboutMe: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(100, 'La descripción debe tener menos de 100 caracteres'),
  shortDescription: z
    .string()
    .min(3, 'La descripción corta debe tener al menos 3 caracteres')
    .max(40, 'La descripción corta debe tener menos de 40 caracteres'),
})

export type UserSettingsFormType = z.infer<typeof UserValidation>


// Para confirmar con un mail enviado

// confirmEmail: z
// .string()
// .refine((value, ctx) => value === ctx.email, {
//   message: 'Los campos de correo electrónico deben coincidir',
//   path: ['confirmEmail'],
// }),