import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from './item.types';
import { getMenu } from './itemFetch';
import { ResponseForm } from '../../types';

type ItemState = {
  loading: boolean;
  data: Item[] | null;
  message: string;
};

const initialState: ItemState = {
  loading: false,
  data: null,
  message: '',
};

export const itemGetAll = createAsyncThunk('item/itemGetAll', getMenu);

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(itemGetAll.pending, state => {
        state.loading = true;
      })
      .addCase(
        itemGetAll.fulfilled,
        (state, action: PayloadAction<ResponseForm<Item[]> | void>) => {
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
      .addCase(itemGetAll.rejected, state => {
        state.loading = false;
        state.message = 'Something went wrong';
        state.data = null;
      });
  },
});

export const itemReducer = itemSlice.reducer;
