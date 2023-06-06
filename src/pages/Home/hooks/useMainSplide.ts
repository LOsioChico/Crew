import { Splide } from '@splidejs/splide'
import { useEffect } from 'react'

export const useMainSplide = (): void => {
  useEffect(() => {
    new Splide('#splide2', {
      type: 'loop',
      perPage: 3,
      width: '100%',
    }).mount()
  }, [])
}
