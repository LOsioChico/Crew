import { CrewApi } from '@/api'
import { images } from '@/data'
import { type IProject } from '@/interfaces'
import { useQuery } from '@tanstack/react-query'

interface IUseProjectById {
  project: IProject | undefined
  isLoading: boolean
  error: unknown
}

export const getProjectById = async (
  id: string | undefined
): Promise<IProject | undefined> => {
  if (id === undefined) return undefined

  const { data } = await CrewApi.get<IProject>(
    `/projectRoute/search/byId?id=${id}`
  )

  if ('errorMessage' in data) return undefined

  const project = {
    ...data,
    mainImage: images[0],
    images,
  }

  return project
}

export const useProjectById = (id: string | undefined): IUseProjectById => {
  const { data, isLoading, error } = useQuery<IProject | undefined>({
    queryKey: ['project', id],
    queryFn: async () => await getProjectById(id),
  })

  return { project: data, isLoading, error }
}
