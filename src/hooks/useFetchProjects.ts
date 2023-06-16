import { CrewApi } from '@/api'
import { images } from '@/data'
import { type IProject } from '@/interfaces'
import { useProjects } from '@/store'
import { useEffect } from 'react'

export const useFetchProjects = (): void => {
  const { setProjects } = useProjects()

  useEffect(() => {
    CrewApi.get<IProject[]>('/projectRoute/allProjects')
      .then((res) => {
        setProjects(
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
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setProjects])
}
