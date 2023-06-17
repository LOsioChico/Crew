import { type ILoginForm } from '@/interfaces/loginForm'
import {
  LoginValidation,
  type LoginValidationType,
} from '@/schemas/LoginValidation'
import { supabase } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'

export const useLoginForm = (): ILoginForm => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginValidationType>({
    resolver: zodResolver(LoginValidation),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<LoginValidationType> = async (data) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (error != null) {
      setError('email', {
        type: 'manual',
        message: error.message,
      })
      console.error(error)
    }
  }

  return { register, handleSubmit, onSubmit, errors, isSubmitting }
}
