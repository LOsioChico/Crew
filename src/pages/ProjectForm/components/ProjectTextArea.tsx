import { type ProjectFormType } from '@/schemas/ProjectValidation'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'

interface ProjectTextAreaProps {
  label: string
  name: keyof ProjectFormType
  register: UseFormRegister<ProjectFormType>
  errors: FieldErrors<ProjectFormType>
  placeholder: string
}

export const ProjectTextArea: React.FC<ProjectTextAreaProps> = ({
  register,
  errors,
  label,
  placeholder,
  name,
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='mb-1 block font-bold'>
        {label}:
      </label>
      <textarea
        {...register(name)}
        id={name}
        placeholder={placeholder}
        className='w-full rounded border p-2'
      />
      {errors[name] != null && (
        <span className='pl-1 text-sm text-red-700'>
          {errors[name]?.message ?? 'Este campo es requerido'}
        </span>
      )}
    </div>
  )
}
