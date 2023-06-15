import { Auth } from '@/auth'
import { MainCarrousel, PopularCarrousel, TopCategories } from './components'

export const Home: React.FC = () => {
  return (
    <>
      <Auth />
      <MainCarrousel />
      <TopCategories />
      <PopularCarrousel />
    </>
  )
}
