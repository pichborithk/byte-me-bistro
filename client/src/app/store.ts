import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { userReducer } from './user/userSlice';
import { itemReducer } from './item/itemSlice';
import { orderReducer } from './order/orderSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    item: itemReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
