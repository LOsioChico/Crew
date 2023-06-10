import { projectExamples } from '@/data'
import { usePopularSplide } from '../../hooks'
import { PopularProject } from './components'

export const PopularCarrousel: React.FC = () => {
  usePopularSplide()
  return (
    <div className='flex h-full flex-col items-center justify-center py-12'>
      <p className='self-center text-3xl font-bold'>Popular Projects</p>
      <div className='splide w-full' id='splide1' role='group'>
        <div className='splide__track h-[670px]'>
          <ul className='splide__list'>
            {projectExamples.map((project) => (
              <PopularProject key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
