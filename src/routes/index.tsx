import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { definitionRoutes } from './definition'

export const Routers: React.FC = () => {
  const routes = createBrowserRouter(definitionRoutes)

  return <RouterProvider router={routes} />
}
