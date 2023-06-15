import { Splide } from '@splidejs/splide'
import { useEffect } from 'react'

export const useProjectSplide = (): void => {
  useEffect(() => {
    const projectSplide = new Splide('#projectSplide', {
      type: 'loop',
      perPage: 1,
      width: 'auto',
      arrows: false,
      autoplay: true,
      speed: 2000,
      pauseOnHover: true,
      pagination: false,
    })

    projectSplide.mount()

    return () => {
      projectSplide.destroy()
    }
  }, [])
}
