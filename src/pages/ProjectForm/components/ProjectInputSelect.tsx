import { type ProjectFormType } from '@/schemas/ProjectValidation'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'

interface ProjectInputSelectProps {
  label: string
  name: keyof ProjectFormType
  register: UseFormRegister<ProjectFormType>
  errors: FieldErrors<ProjectFormType>
  defaultOption: string
  options: string[]
}

export const ProjectInputSelect: React.FC<ProjectInputSelectProps> = ({
  name,
  register,
  label,
  errors,
  defaultOption,
  options,
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='mb-1 block font-bold'>
        {label}:
      </label>
      <select
        {...register(name, { required: true })}
        id={name}
        className='w-full rounded border p-2'
      >
        <option value=''>{defaultOption}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {errors.location != null && (
        <span className='pl-1 text-sm text-red-700'>
          Este campo es requerido
        </span>
      )}
    </div>
  )
}
