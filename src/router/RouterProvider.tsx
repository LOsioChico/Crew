import App from '@/App'
import { Footer, NavBar } from '@/components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
