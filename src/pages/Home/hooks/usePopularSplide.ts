import { Splide } from '@splidejs/splide'
import { useEffect } from 'react'

export const usePopularSplide = (): void => {
  useEffect(() => {
    new Splide('#splide1', {
      type: 'loop',
      perPage: 4,
      width: '85%',
      gap: '2rem',
      height: '540px',
    }).mount()
  }, [])
}
