import { Dispatch, SetStateAction } from "react";
import { Order } from "./OrderList.types";

export type RootContext = {
  orders: Order[];
  setOrders: Dispatch<SetStateAction<Order[]>>;
};
