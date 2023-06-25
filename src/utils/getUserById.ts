import { CrewApi } from '@/api'
import { type IUser } from '@/interfaces'

export const getUserById = async (
  id: string
): Promise<IUser | undefined> => {
  const { data } = await CrewApi.get<IUser>(
    `/userRoute/userDetails?id=${id}`
  )

  if ('errorMessage' in data) return

  return data
}
