import { MainCarrousel, PopularCarrousel, TopCategories } from './components'

export const Home: React.FC = () => {
  return (
    <>
      <MainCarrousel />
      <PopularCarrousel />
      <TopCategories />
    </>
  )
}