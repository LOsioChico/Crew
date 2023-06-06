import { MainCarrousel, PopularProjects, TopCategories } from './components'

export const Home: React.FC = () => {
  return (
    <>
      <MainCarrousel />
      <PopularProjects />
      <TopCategories />
    </>
  )
}
