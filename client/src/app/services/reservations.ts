import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Reservation } from '../reservation/reservation.types';

export const reservationsApi = createApi({
  reducerPath: 'reservations',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  endpoints: builder => ({
    getReservations: builder.query<ResponseForm<Reservation[]>, void>({
      query: () => 'reservations',
    }),
  }),
});

export const { useGetReservationsQuery } = reservationsApi;
