import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";

import { BASE_URL, NewsApiHeaders } from "../constant/api";
import { IAllNews } from "../interfaces/crypto";
import { NewsCoinParamsQuery } from "../types";

const createRequest = (url: string) => ({ url, headers: NewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getCryptoNews: builder.query<IAllNews, NewsCoinParamsQuery>({
      query: ({ newsCategory, count }): FetchArgs | string =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
