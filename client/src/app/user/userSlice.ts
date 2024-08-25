import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';
import { getUser } from './userFetch';
import { UserResponse } from './user.types';

type UserState = {
  loading: boolean;
  data: User | null;
  message: string;
  //   status: "idle" | "pending" | "succeeded" | "rejected";
};

export const userGet = createAsyncThunk('user/get', getUser);

const initialState: UserState = {
  loading: false,
  data: null,
  message: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userClear() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userGet.pending, state => {
        state.loading = true;
      })
      .addCase(
        userGet.fulfilled,
        (state, action: PayloadAction<UserResponse | void>) => {
          state.loading = false;
          if (action.payload && action.payload.isSuccess) {
            state.message = action.payload.message;
            state.data = action.payload.data;
          } else {
            localStorage.removeItem('TOKEN');
            return initialState;
          }
        },
      )
      .addCase(userGet.rejected, state => {
        state.loading = false;
        state.message = 'Something went wrong';
        state.data = null;
        localStorage.removeItem('TOKEN');
      });
  },
});

export const { userClear } = userSlice.actions;
export const userReducer = userSlice.reducer;
