import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY } from "../constant/api";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  "X-RapidAPI-Key": API_KEY,
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: (type) => createRequest(`/${type}`),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;
