export const BASE_URL = process.env.REACT_APP_BASE_URL
export const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY

//HEADERS API
export const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': API_KEY,
}

export const exchangesApiHeaders = {
  'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
  'X-RapidAPI-Key': API_KEY,
}

export const NewsApiHeaders = {
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': API_KEY,
}
