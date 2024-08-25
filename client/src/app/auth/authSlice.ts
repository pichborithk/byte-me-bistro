import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authFetch';
import { AuthResponse } from './auth.types';
import { toast } from 'react-hot-toast';

type AuthState = {
  loading: boolean;
  token: string;
  message: string;
  //   status: "idle" | "pending" | "succeeded" | "rejected";
};

const initialState: AuthState = {
  loading: false,
  token: localStorage.getItem('TOKEN') ?? '',
  message: '',
};

export const register = createAsyncThunk('auth/register', registerUser);
export const login = createAsyncThunk('auth/login', loginUser);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    tokenClear() {
      localStorage.removeItem('TOKEN');
      toast.success('Logged Out');
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<AuthResponse | void>) => {
          state.loading = false;
          if (action.payload && action.payload.isSuccess) {
            state.message = action.payload.message;
            state.token = action.payload.data.token;
            localStorage.setItem('TOKEN', action.payload.data.token);
            toast.success(action.payload.message);
          } else {
            localStorage.removeItem('TOKEN');
            toast.error(action.payload!.message);
            return initialState;
          }
        },
      )
      .addCase(register.rejected, state => {
        state.loading = false;
        state.message = 'Something went wrong';
        state.token = '';
        localStorage.removeItem('TOKEN');
      });

    builder
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<AuthResponse | void>) => {
          state.loading = false;
          if (action.payload && action.payload.isSuccess) {
            state.message = action.payload.message;
            state.token = action.payload.data.token;
            localStorage.setItem('TOKEN', action.payload.data.token);
            toast.success(action.payload.message);
          } else {
            toast.error(action.payload!.message);
            localStorage.removeItem('TOKEN');
            return initialState;
          }
        },
      )
      .addCase(login.rejected, state => {
        state.loading = false;
        state.message = 'Something went wrong';
        state.token = '';
        localStorage.removeItem('TOKEN');
      });
  },
});

export const authReducer = authSlice.reducer;
export const { tokenClear } = authSlice.actions;
