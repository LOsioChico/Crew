import { CrewApi } from '@/api'
import { type ICreator } from '@/interfaces'

export const getUserById = async (
  id: string
): Promise<ICreator | undefined> => {
  const { data } = await CrewApi.get<ICreator>(
    `/userRoute/userDetails?id=${id}`
  )

  if ('errorMessage' in data) return

  return data
}
