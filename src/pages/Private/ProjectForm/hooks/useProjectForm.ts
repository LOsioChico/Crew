import { CrewApi } from '@/api'
import {
  ProjectValidation,
  type ProjectFormType,
} from '@/schemas/ProjectValidation'
import { useUserIdStore } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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

  const { userId } = useUserIdStore()
  const navigate = useNavigate()

  const onSubmit = async (data: ProjectFormType): Promise<void> => {
    try {
      const { data: projectId } = await CrewApi.post<{ message: string }>(
        '/projectRoute',
        {
          ...data,
          creatorId: userId,
        }
      )
      if (projectId.message === undefined) return
      navigate(`/projects/${projectId.message}`)
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
