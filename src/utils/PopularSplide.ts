import { Splide } from '@splidejs/splide'

export const PopularSplide = (): Splide => {
  const splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    width: '77%',
  }).mount()

  return splide
}
