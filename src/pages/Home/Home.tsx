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
      <FavoritesCarrousel />
    </>
  )
}
