interface AuthInputProps {
  label: string
  type: string
  placeholder: string
}

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  type,
  placeholder,
}) => {
  return (
    <div className='mb-2 last:mb-0'>
      <label
        htmlFor={label}
        className='block pl-1 text-sm font-semibold text-gray-500'
      >
        {label}
      </label>
      <input
        id={label}
        type={type}
        name={label}
        className='duration-30 h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-secondaryDark'
        placeholder={placeholder}
      />
    </div>
  )
}
