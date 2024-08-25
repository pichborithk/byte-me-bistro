import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import {
  ErrorPage,
  Home,
  Menu,
  OrderItemList,
  OrderList,
  ReservationList,
  SignIn,
  SignUp,
  UserList,
} from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "orders",
        children: [
          {
            index: true,
            element: <OrderList />,
          },
          {
            path: ":orderId",
            element: <OrderItemList />,
          },
        ],
      },
      {
        path: "reservations",
        element: <ReservationList />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
