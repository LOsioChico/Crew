import { CrewApi } from '@/api'
import { images } from '@/data'
import { type IProject } from '@/interfaces'
import { useQuery } from '@tanstack/react-query'

interface IUsePopularProjects {
  projects: IProject[] | undefined
  isLoading: boolean
  error: unknown
}

export const getPopularProjects = async (): Promise<IProject[]> => {
  const { data } = await CrewApi.get<IProject[]>(
    '/projectRoute/twentyMostTrending'
  )

  if ('errorMessage' in data) {
    return []
  }

  const projects = data?.map((project, index) => ({
    ...project,
    mainImage: images[index % 4],
    fundingPercentage: Math.floor(Math.random() * 100),
  }))

  return projects
}

export const usePopularProjects = (): IUsePopularProjects => {
  const { data, isLoading, error } = useQuery<IProject[]>({
    queryKey: ['popularProjects'],
    queryFn: getPopularProjects,
  })

  return { projects: data, isLoading, error }
}
