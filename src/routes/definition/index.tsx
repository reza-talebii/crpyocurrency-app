import { ROUTES } from '@enums'
import { CryptocurrenciesPage, ExchangesPage, HomePage, NewsPage } from 'pages'
import CryptoDetails from 'pages/cryptocurrencies/[id]'
import { Navigate, RouteObject } from 'react-router-dom'

export const definitionRoutes: RouteObject[] = [
  {
    path: ROUTES.home,
    element: <></>,
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
        path: `${ROUTES.crypto}/:id`,
      },
      {
        element: <NewsPage />,
        path: ROUTES.news,
      },
      {
        element: <ExchangesPage />,
        path: ROUTES.home,
      },
    ],
  },

  { path: '*', element: <Navigate to={ROUTES.home} /> },
]
