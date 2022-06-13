import { IHeaderApi } from "../interfaces/api";

export const BASE_URL = "https://coinranking1.p.rapidapi.com";
export const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

//HEADERS API
export const cryptoApiHeaders: IHeaderApi = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "449ece1bedmsh44664fa38cb935ap17810ejsn3d3db2fe6ce0",
};

export const exchangesApiHeaders: IHeaderApi = {
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  "X-RapidAPI-Key": "449ece1bedmsh44664fa38cb935ap17810ejsn3d3db2fe6ce0",
};

export const NewsApiHeaders: IHeaderApi = {
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  "X-RapidAPI-Key": "449ece1bedmsh44664fa38cb935ap17810ejsn3d3db2fe6ce0",
};
