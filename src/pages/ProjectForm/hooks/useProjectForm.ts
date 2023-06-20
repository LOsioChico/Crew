import { CrewApi } from '@/api'
import {
  ProjectValidation,
  type ProjectFormType,
} from '@/schemas/ProjectValidation'
import { supabase } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type IProjectForm } from '../interface/projectForm'

export const useProjectForm = (): IProjectForm => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ProjectFormType>({
    mode: 'onBlur',
    resolver: zodResolver(ProjectValidation),
  })

  const onSubmit = async (data: ProjectFormType): Promise<void> => {
    try {
      void (await CrewApi.post('/projectRoute', {
        ...data,
        creatorId: (await supabase.auth.getUser()).data.user?.id,
      }))
    } catch (error) {
      console.log(error)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    isSubmitSuccessful,
  }
}
