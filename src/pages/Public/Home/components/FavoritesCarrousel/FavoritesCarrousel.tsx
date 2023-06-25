import { ProjectCard } from '@/components'
import { useFavoriteProjects } from '@/hooks'
import { useUserIdStore } from '@/store'

import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

interface FavoritesCarrouselProps {
  width: string
  margin: string
}

export const FavoritesCarrousel: React.FC<FavoritesCarrouselProps> = (
  props
) => {
  const { userId } = useUserIdStore()
  const { favoriteProjects } = useFavoriteProjects({ userId })

  if (favoriteProjects !== undefined && favoriteProjects.length > 0) {
    return (
      <div>
        <h2 className={`${props.margin}text-3xl`}>
          Projects you are following
        </h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          navigation={{
            enabled: true,
          }}
          spaceBetween={20}
          className={`flex ${props.width} items-center justify-center`}
        >
          {favoriteProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  }

  return null
}
