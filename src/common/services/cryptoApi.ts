import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { BASE_URL, cryptoApiHeaders } from "../constant/api";
import {
  IHistoryQuery,
  ICryptoDetailQuery,
  ICryptosQuery,
} from "../interfaces/crypto";
import { paramHistory } from "../types/index";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getCryptos: builder.query<ICryptosQuery, number>({
      query: (count): string | FetchArgs =>
        createRequest(`/coins/?limit=${count}`),
    }),

    getCryptoDetails: builder.query<ICryptoDetailQuery, string>({
      query: (coinID): string | FetchArgs => createRequest(`/coin/${coinID}`),
    }),

    getCryptoHistory: builder.query<IHistoryQuery, paramHistory>({
      query: ({ coinID, timePeriod }): string | FetchArgs =>
        createRequest(`coin/${coinID}/history?timeperiod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
