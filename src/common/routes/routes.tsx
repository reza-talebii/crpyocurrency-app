import {
  HomePage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Exchanges,
} from "../../pages";

import { RoutesObject } from "../interfaces/Routes";

export const PublicRoutes: RoutesObject = {
  home: {
    get: "/",
    return: <HomePage />,
    title: "Home",
  },
  cryptocurrencies: {
    get: "/cryptocurrencies",
    return: <Cryptocurrencies simplified={null} />,
    title: "cryptocurrencies",
  },
  cryptoDetails: {
    get: "/crypto/:coinID",
    return: <CryptoDetails />,
    title: "coin",
  },
  news: {
    get: "/news",
    return: <News simplified={null} />,
    title: "News",
  },
  exchanges: {
    get: "/exchanges",
    return: <Exchanges />,
    title: "exchanges",
  },
};
