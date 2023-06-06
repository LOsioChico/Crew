import { Splide } from '@splidejs/splide'

export const PopularSplide = (): void => {
  const popularSplide = new Splide('#slider1', {
    type: 'loop',
    perPage: 3,
    width: '77%',
  })
  popularSplide.mount()
}
