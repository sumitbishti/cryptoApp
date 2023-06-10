import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'db052cb21emshb4e299eac46e20bp1a8268jsn152fa1e842f8',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;