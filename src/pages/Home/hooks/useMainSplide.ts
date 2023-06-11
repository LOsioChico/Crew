import { Splide } from '@splidejs/splide'
import { useEffect } from 'react'

export const useMainSplide = (): void => {
  useEffect(() => {
    const splide2 = new Splide('#splide2', {
      type: 'loop',
      perPage: 1,
      width: 'auto',
      arrows: false,
      pagination: false,
      autoplay: true,
      speed: 2000,
      pauseOnHover: true,
    })

    splide2.mount()

    return () => {
      splide2.destroy()
    }
  }, [])
}
