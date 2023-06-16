import { Footer, NavBar } from '@/components'
import { Home, ProjectForm, Projects } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<Projects />} />
        <Route path='/project-form' element={<ProjectForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
