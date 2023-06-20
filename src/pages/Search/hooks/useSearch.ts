import { CrewApi } from '@/api'
import { images } from '@/data'
import { type IProject } from '@/interfaces'
import { useQuery } from '@tanstack/react-query'

interface getSearchProjectsProps {
  params: URLSearchParams
}

interface IProjectError {
  errorMessage: string
}

export const getSearchProjects = async ({
  params,
}: getSearchProjectsProps): Promise<IProject[]> => {
  const { data } = await CrewApi.get<IProject[] | IProjectError>(
    '/projectRoute/searchProjects',
    {
      params,
    }
  )

  if ('errorMessage' in data) {
    return []
  }

  const projects = data?.map((project, index) => ({
    ...project,
    mainImage: images[index % 4],
  }))

  return projects
}

interface IUseSearch {
  projects: IProject[] | undefined
  isLoading: boolean
  error: unknown
}

export const useSearch = ({
  params,
}: {
  params: getSearchProjectsProps['params']
}): IUseSearch => {
  const { data, isLoading, error } = useQuery<IProject[]>({
    queryKey: ['searchProjects', params.toString(), params],
    queryFn: async () => await getSearchProjects({ params }),
  })

  return { projects: data, isLoading, error }
}
