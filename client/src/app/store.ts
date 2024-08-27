import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { userReducer } from './user/userSlice';
import { itemReducer } from './item/itemSlice';
import { orderReducer } from './order/orderSlice';
import { reservationReducer } from './reservation/reservationSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { itemsApi } from './services/items';
import { reservationsApi } from './services/reservations';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    item: itemReducer,
    order: orderReducer,
    reservation: reservationReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
    [reservationsApi.reducerPath]: reservationsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(itemsApi.middleware)
      .concat(reservationsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
