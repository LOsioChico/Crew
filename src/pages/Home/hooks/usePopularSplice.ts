import { Splide } from '@splidejs/splide'
import { useEffect } from 'react'

export const usePopularSplide = (): void => {
  useEffect(() => {
    new Splide('#splide1', {
      type: 'loop',
      perPage: 3,
      width: '77%',
    }).mount()
  }, [])
}
