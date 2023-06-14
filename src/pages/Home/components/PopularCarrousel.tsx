import { ProjectCard } from '@/components'
import { ProjectCardsData } from '@/data'
import { usePopularSplide } from '../hooks'

export const PopularCarrousel: React.FC = () => {
  usePopularSplide()
  return (
    <div className='flex h-full flex-col items-center justify-center pb-12 pt-6'>
      <p className='self-center text-3xl font-bold'>Popular Projects</p>
      <div className='splide w-full' id='splide1' role='group'>
        <div className='splide__track h-[670px]'>
          <ul className='splide__list'>
            {ProjectCardsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
