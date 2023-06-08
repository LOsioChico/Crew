import { useMainSplide } from '../hooks'
import '@splidejs/splide/css/skyblue'

export const MainCarrousel: React.FC = () => {
  useMainSplide()

  return (
    <div className='flex flex-col items-center justify-center border'>
      <p className='mb-4 text-2xl font-bold'>Main Carousel</p>
      <div className='splide' id='splide2' role='group'>
        <div className='splide__track'>
          <ul className='splide__list'>
            <li className='splide__slide'>
              <div>
                <div className='absolute ml-72 mt-64 text-xl text-white'>
                  <h2 className='font-bold'>Titulo</h2>
                  <p>Prueba</p>
                  <a href='#' className='font-bold hover:underline'>
                    Prueba Link
                  </a>
                </div>
                <img
                  src='https://images.wallpaperscraft.com/image/single/car_suv_puddle_834471_3840x2160.jpg'
                  alt='New Image'
                  className='h-[400px] w-full object-cover'
                />
              </div>
            </li>
            <li className='splide__slide'>
              <div>
                <img
                  src='https://images.wallpaperscraft.com/image/single/buildings_lights_night_867860_3840x2400.jpg'
                  alt=''
                  className='h-[400px] w-full object-cover'
                />
              </div>
            </li>
            <li className='splide__slide'>
              <div>
                <img
                  src='https://images.wallpaperscraft.com/image/single/dandelion_fluff_drops_217082_3840x2160.jpg'
                  alt=''
                  className='h-[400px] w-full object-cover'
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
