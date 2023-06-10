import { Splide } from '@splidejs/splide'
import { useEffect } from 'react'

export const usePopularSplide = (): void => {
  useEffect(() => {
    const splide1 = new Splide('#splide1', {
      type: 'loop',
      perPage: 4,
      perMove: 4,
      width: '85%',
      gap: '2rem',
      height: '575px',
      padding: {
        right: '1rem',
        left: '1rem',
      },
      classes: {
        arrows: 'splide__arrows popular__arrows',
        arrow: 'splide__arrow popular__arrow',
        prev: 'splide__arrow--prev popular__arrow--prev -left-[5rem]',
        next: 'splide__arrow--next popular__arrow--next -right-[5rem]',
      },
    })

    splide1.mount()

    return () => {
      splide1.destroy()
    }
  }, [])
}
