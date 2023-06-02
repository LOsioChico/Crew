import App from '@/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}
