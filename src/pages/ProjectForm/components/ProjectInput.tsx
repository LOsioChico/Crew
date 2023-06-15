import { type ProjectFormType } from '@/schemas/ProjectValidation'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'

interface ProjectInputProps {
  label: string
  name: keyof ProjectFormType
  type: string
  placeholder: string
  register: UseFormRegister<ProjectFormType>
  errors: FieldErrors<ProjectFormType>
  defaultValue?: string
}

export const ProjectInput: React.FC<ProjectInputProps> = ({
  name,
  type,
  placeholder,
  register,
  label,
  errors,
  defaultValue,
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='mb-1 block pl-1 font-bold'>
        {label}:
      </label>
      <input
        className='w-full rounded border p-2'
        id={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, {
          valueAsNumber: type === 'number',
        })}
      />
      {errors[name] != null && (
        <span className='pl-1 text-sm text-red-700'>
          {errors[name]?.message ?? 'Este campo es requerido'}
        </span>
      )}
    </div>
  )
}
