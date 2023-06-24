import { Layout } from '@/components'
import { AuthGuard } from '@/guards/AuthGuard'
import { Home, ProjectForm, Projects, Search } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PublicRoutes.home} element={<Home />} />
          <Route path={PublicRoutes.projects} element={<Projects />} />
          <Route path={PublicRoutes.search} element={<Search />} />
          <Route element={<AuthGuard />}>
            <Route
              path={PrivateRoutes.createProject}
              element={<ProjectForm />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export const PublicRoutes = {
  home: '/',
  projects: '/projects/:id',
  search: '/search',
}

export const PrivateRoutes = {
  createProject: '/createProject',
}
