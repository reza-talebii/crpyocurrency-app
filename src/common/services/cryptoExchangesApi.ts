import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";

import { BASE_URL, exchangesApiHeaders } from "../constant/api";
import { IExchangesType } from "../interfaces/crypto";

const createRequest = (url: string) => ({
  url,
  headers: exchangesApiHeaders,
});

export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getCryptoExchanges: builder.query<IExchangesType[], void>({
      query: (): string | FetchArgs => createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;
