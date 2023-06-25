import { MainCarrousel, PopularCarrousel, TopCategories } from './components'
import { FavoritesCarrousel } from '@/components'
export const Home: React.FC = () => {
  return (
    <>
      <MainCarrousel />
      <TopCategories />
      <PopularCarrousel />
      <FavoritesCarrousel width={'w-3/4'} margin={'ml-[12.5%] '} />
    </>
  )
}
