import { Footer, NavBar } from '@/components'
import { Home, ProjectForm, Projects, Search } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<Projects />} />
        <Route path='/project-form' element={<ProjectForm />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
