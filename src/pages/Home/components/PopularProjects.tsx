import { PopularSplide } from '@/utils'
import '@splidejs/splide/css/skyblue'
import { useEffect } from 'react'

export const PopularProjects: React.FC = () => {
  useEffect(() => {
    PopularSplide()
  }, [])
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='mb-4 text-2xl font-bold'>Popular Projects</p>
      <div className='splide' role='group'>
        <div className='splide__track'>
          <ul className='splide__list w-4/5'>
            <li className='splide__slide'>
              <div className='h-[540px] w-[275px] bg-red-400'></div>
            </li>
            <li className='splide__slide'>
              <div className='h-[540px] w-[275px] bg-gray-400'></div>
            </li>
            <li className='splide__slide'>
              <div className='h-[540px] w-[275px] bg-blue-400'></div>
            </li>
            <li className='splide__slide'>
              <div className='h-[540px] w-[275px] bg-slate-800'></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
