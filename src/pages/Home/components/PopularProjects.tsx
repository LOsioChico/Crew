import '@splidejs/splide/css/skyblue'
import { usePopularSplide } from '../hooks'

export const PopularProjects: React.FC = () => {
  usePopularSplide()
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='mb-4 text-2xl font-bold'>Popular Projects</p>
      <div className='splide w-full' id='splide1' role='group'>
        <div className='splide__track'>
          <ul className='splide__list'>
            <li className='splide__slide bg-red-400'></li>
            <li className='splide__slide bg-gray-400'></li>
            <li className='splide__slide bg-blue-400'></li>
            <li className='splide__slide bg-slate-800'></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
