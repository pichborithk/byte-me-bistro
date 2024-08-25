import { Dispatch, SetStateAction } from "react";
import { Order } from "./OrderList.types";
import { User } from ".";

export type RootContext = {
  orders: Order[];
  setOrders: Dispatch<SetStateAction<Order[]>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  getUserData: (token: string) => void;
};
