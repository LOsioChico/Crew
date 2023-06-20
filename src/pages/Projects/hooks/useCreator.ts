import { CrewApi } from '@/api'
import { type ICreator } from '@/interfaces'
import { useQuery } from '@tanstack/react-query'

interface IUseUserById {
  user: ICreator | undefined
  isLoading: boolean
  error: unknown
}

export const getUserById = async (
  id: string | undefined
): Promise<ICreator | undefined> => {
  if (id === undefined) return undefined

  const { data } = await CrewApi.get<ICreator>(
    `/userRoute/userDetails?id=${id}`
  )

  if ('errorMessage' in data) return undefined

  return data
}

export const useUserById = (id: string | undefined): IUseUserById => {
  const { data, isLoading, error } = useQuery<ICreator | undefined>({
    queryKey: ['user', id],
    queryFn: async () => await getUserById(id),
  })

  return { user: data, isLoading, error }
}
