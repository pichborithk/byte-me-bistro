import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from './order.types';
import { getOrders } from './orderFetch';

type OrderState = {
  loading: boolean;
  data: Order[] | null;
  message: string;
};

const initialState: OrderState = {
  loading: false,
  data: null,
  message: '',
};

export const orderGetAll = createAsyncThunk('order/orderGetAll', getOrders);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(orderGetAll.pending, state => {
        state.loading = true;
      })
      .addCase(
        orderGetAll.fulfilled,
        (state, action: PayloadAction<ResponseForm<Order[]> | void>) => {
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
      .addCase(orderGetAll.rejected, state => {
        state.loading = false;
        state.message = 'Something went wrong';
        state.data = null;
      });
  },
});

export const orderReducer = orderSlice.reducer;
