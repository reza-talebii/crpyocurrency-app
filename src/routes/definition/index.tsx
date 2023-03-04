import MainLayout from 'layout'
import { ROUTES } from 'models/enums'
import { CryptocurrenciesPage, ExchangesPage, HomePage, NewsPage } from 'pages'
import CryptoDetails from 'pages/cryptocurrencies/[id]'
import { Navigate, RouteObject } from 'react-router-dom'

export const definitionRoutes: RouteObject[] = [
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
        path: ROUTES.home,
        index: true,
      },
      {
        element: <CryptocurrenciesPage />,
        path: ROUTES.cryptocurrencies,
      },
      {
        element: <CryptoDetails />,
        path: `${ROUTES.cryptocurrencies}/:id`,
      },
      {
        element: <NewsPage />,
        path: ROUTES.news,
      },
      {
        element: <ExchangesPage />,
        path: ROUTES.exchanges,
      },
    ],
  },

  { path: '*', element: <Navigate to={ROUTES.home} /> },
]
