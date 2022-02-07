import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsheader = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_KEY,
  "x-rapidapi-host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoNewsheader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ count, newsCategory }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
