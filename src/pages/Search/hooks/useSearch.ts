import { CrewApi } from '@/api'
import { type IProject } from '@/interfaces'
import { useQuery } from '@tanstack/react-query'

interface getSearchProjectsProps {
  params: URLSearchParams
}

export const getSearchProjects = async ({
  params,
}: getSearchProjectsProps): Promise<IProject[]> => {
  const response = await CrewApi.get('/projectRoute/searchProjects', {
    params,
  })
  return response.data
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
