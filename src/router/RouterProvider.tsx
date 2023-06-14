import { Footer, NavBar } from '@/components'
import { Home, Projects } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
