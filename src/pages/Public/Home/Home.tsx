import {
  MainCarrousel,
  PopularCarrousel,
  TopCategories,
  FavoritesCarrousel,
} from './components'

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
