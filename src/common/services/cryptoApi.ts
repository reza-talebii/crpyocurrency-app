import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { BASE_URL, cryptoApiHeaders } from "../constant/api";
import { ICryptoDetailQuery, ICryptosQuery } from "../interfaces/crypto";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    //GET CRYPTOCURRENCIES
    getCryptos: builder.query<ICryptosQuery, number>({
      query: (count): string | FetchArgs =>
        createRequest(`/coins/?limit=${count}`),
    }),

    //GET COIN Details
    getCryptoDetails: builder.query<ICryptoDetailQuery, string>({
      query: (coinID): string | FetchArgs => createRequest(`/coin/${coinID}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
