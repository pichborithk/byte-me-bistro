import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './app/store';
import Root from './Root';
import {
  CreateReservation,
  ErrorPage,
  Home,
  Menu,
  OrderItemList,
  OrderList,
  ReservationList,
  SignIn,
  SignUp,
  UserList,
} from './routes';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'orders',
        children: [
          {
            index: true,
            element: <OrderList />,
          },
          {
            path: ':orderId',
            element: <OrderItemList />,
          },
        ],
      },
      {
        path: 'reservations',
        element: <ReservationList />,
      },
      {
        path: 'users',
        element: <UserList />,
      },
      {
        path: 'login',
        element: <SignIn />,
      },
      {
        path: 'register',
        element: <SignUp />,
      },
      {
        path: 'reservations/create',
        element: <CreateReservation />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
