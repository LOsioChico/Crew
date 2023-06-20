import { z } from 'zod'

export const ProjectValidation = z.object({
  title: z
    .string()
    .min(3, 'El título debe tener al menos 3 caracteres')
    .max(30, 'El título debe tener menos de 30 caracteres'),
  shortDescription: z
    .string()
    .min(3, 'La descripción corta debe tener al menos 3 caracteres')
    .max(40, 'La descripción corta debe tener menos de 40 caracteres'),
  description: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(100, 'La descripción debe tener menos de 100 caracteres'),
  fundingGoal: z
    .number()
    .min(1, 'El objetivo de financiación debe ser mayor a 0')
    .max(1000000, 'El objetivo de financiación debe ser menor a 1000000'),
  fundingDayLeft: z
    .number()
    .min(1, 'Los días restantes de financiación deben ser mayor a 0')
    .max(60, 'Los días restantes de financiación deben ser menor a 60'),
  category: z.enum([
    'Tecnologia e innovación',
    'Trabajos Creativos',
    'Proyectos Comunitarios',
  ]),
  location: z.enum(['Argentina'], {
    required_error: 'Debes seleccionar una ubicación',
  }),
})

export type ProjectFormType = z.infer<typeof ProjectValidation>
