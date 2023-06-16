import { CrewApi } from '@/api'
import { images } from '@/data'
import { type IProject } from '@/interfaces'
import { useQuery } from '@tanstack/react-query'

interface IUseProjects {
  projects: IProject[] | undefined
  isLoading: boolean
  error: unknown
}

export const getProjects = async (): Promise<IProject[]> => {
  return await CrewApi.get<IProject[]>('/projectRoute/allProjects').then(
    (res) =>
      res.data.map((project, index) => ({
        ...project,
        mainImage: images[index % 4],
        images,
        fundingPercentage: Math.floor(Math.random() * 100),
        creator: {
          id: '1',
          firstName: 'Juan',
          lastName: 'Perez',
          avatar: images[index % 4],
        },
      }))
  )
}

export const useProjects = (): IUseProjects => {
  const { data, isLoading, error } = useQuery<IProject[]>({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  return { projects: data, isLoading, error }
}
