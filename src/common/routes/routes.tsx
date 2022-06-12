import { HomePage, Cryptocurrencies, CryptoDetails, News } from "../../pages";

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
    get: "/cryptoDetails",
    return: <CryptoDetails />,
    title: "coin",
  },
  news: {
    get: "/news",
    return: <News simplified={null} />,
    title: "News",
  },
};
