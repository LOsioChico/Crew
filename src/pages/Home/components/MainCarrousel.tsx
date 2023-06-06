import { useMainSplide } from '../hooks'
import '@splidejs/splide/css/skyblue'

export const MainCarrousel: React.FC = () => {

  useMainSplide()

  return (
    <div className='flex flex-col items-center justify-center border'>
      <p className='mb-4 text-2xl font-bold'>Main Carrousel</p>
      <div className='splide' id='splide2' role='group'>
        <div className='splide__track'>
          <ul className='splide__list w-4/5'>
            <li className='splide__slide'>
              <div className='h-[540px] w-[275px] bg-red-400'></div>
            </li>
            <li className='splide__slide'>
              <div className='h-[540px] w-[275px] bg-gray-400'></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


// export const MainCarrousel: React.FC = () => {

//   return <div>Main Carrousel</div>
// }