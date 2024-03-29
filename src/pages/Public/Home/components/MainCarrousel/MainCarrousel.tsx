import { mainCarrouselProjects } from '@/data'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MainCarrouselInfo } from './components'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const MainCarrousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      slidesPerView={1}
      navigation={{
        enabled: true,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
    >
      {mainCarrouselProjects.map((project) => (
        <SwiperSlide key={project.id}>
          <div className='relative h-[500px] w-full'>
            <div className='absolute h-full w-full bg-black bg-opacity-50' />
            <MainCarrouselInfo project={project} />
            <img
              src={project.mainImage}
              alt={project.title}
              className='h-full w-full object-cover'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
