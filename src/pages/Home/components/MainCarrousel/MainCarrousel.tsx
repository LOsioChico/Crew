import { mainCarrouselProjects } from '@/data'
import { useMainSplide } from '../../hooks'
import { MainCarrouselItem } from './components'

export const MainCarrousel: React.FC = () => {
  useMainSplide()

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='splide' id='splide2' role='group'>
        <div className='splide__track'>
          <ul className='splide__list'>
            {mainCarrouselProjects.map((project) => (
              <MainCarrouselItem project={project} key={project.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
