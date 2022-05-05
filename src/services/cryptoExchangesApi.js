import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  "X-RapidAPI-Key": "449ece1bedmsh44664fa38cb935ap17810ejsn3d3db2fe6ce0",
};

const BASE_URL = "https://coingecko.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;
