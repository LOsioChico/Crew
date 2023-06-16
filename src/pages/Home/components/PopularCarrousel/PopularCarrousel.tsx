import { ProjectCard } from '@/components'
import { useProjects } from '@/hooks'

export const PopularCarrousel: React.FC = () => {
  const { projects } = useProjects()
  return (
    <div className='flex flex-col items-center justify-center pb-12 pt-6'>
      <p className='text-3xl font-bold'>Popular Projects</p>
      <ul className='flex w-full flex-wrap items-center justify-center gap-8'>
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  )
}
