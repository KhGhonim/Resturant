// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ResturantProduct = createApi({
  reducerPath: 'ResturantProduct',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/Api/Food' }),
  endpoints: (builder) => ({
    getResturantProductByName: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
})

export const OneProductApi = createApi({
  reducerPath: "OneProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getOneProductByName: builder.query({
      query: (name) => `Api/Food/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetResturantProductByNameQuery } = ResturantProduct
export const { useGetOneProductByNameQuery } = OneProductApi