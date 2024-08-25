import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reservation } from './reservation.types';
import { getReservations } from './reservationFetch';

type reservationState = {
  loading: boolean;
  data: Reservation[] | null;
  message: string;
};

const initialState: reservationState = {
  loading: false,
  data: null,
  message: '',
};

export const reservationGetAll = createAsyncThunk(
  'reservation/reservationGetAll',
  getReservations,
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(reservationGetAll.pending, state => {
        state.loading = true;
      })
      .addCase(
        reservationGetAll.fulfilled,
        (state, action: PayloadAction<ResponseForm<Reservation[]> | void>) => {
          state.loading = false;
          if (
            action.payload &&
            action.payload.isSuccess &&
            action.payload.data
          ) {
            state.message = action.payload.message;
            state.data = action.payload.data;
          } else {
            return initialState;
          }
        },
      )
      .addCase(reservationGetAll.rejected, state => {
        state.loading = false;
        state.message = 'Something went wrong';
        state.data = null;
      });
  },
});

export const reservationReducer = reservationSlice.reducer;
