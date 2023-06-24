import { Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { useFavoriteProjects } from '@/auth/hooks'
import { useUserIdStore } from '@/store'
import { ProjectCard } from '@/components'

export const FavoritesCarrousel: React.FC = () => {
  const { userId } = useUserIdStore()
  const { favoriteProjects } = useFavoriteProjects({ userId })
  console.log(favoriteProjects)

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={4}
      navigation={{
        enabled: true,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {favoriteProjects?.map((project) => (
        <div key={project.id}>
          <SwiperSlide>
            <ProjectCard project={project} />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  )
}
