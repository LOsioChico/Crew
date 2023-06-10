import { Splide } from '@splidejs/splide'
import { useEffect } from 'react'

export const useMainSplide = (): void => {
  useEffect(() => {
    const splide2 = new Splide('#splide2', {
      type: 'loop',
      perPage: 1,
      width: 'auto',
    })

    splide2.mount()

    return () => {
      splide2.destroy()
    }
  }, [])
}
