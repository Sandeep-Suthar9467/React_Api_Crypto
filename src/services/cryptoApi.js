import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-access-token': process.env.REACT_APP_RAPIDAPI_KEY,
  method: 'GET',
  'Access-Control-Allow-Origin': '*'
 
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),
    getExchangesDescription:builder.query({
      query: (coinId) => createRequest(`/exchange/${coinId}`),
    })
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery,useGetExchangesDescriptionQuery } = cryptoApi;
