import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Item } from '../item/item.types';

export const itemsApi = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  endpoints: builder => ({
    getItems: builder.query<ResponseForm<Item[]>, void>({
      query: () => 'items',
    }),
  }),
});

export const { useGetItemsQuery } = itemsApi;
