import { Dispatch, SetStateAction } from 'react';
import { Order } from './OrderList.types';

export type RootContext = {
  orders: Order[];
  setOrders: Dispatch<SetStateAction<Order[]>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  getUserData: (token: string) => void;
};
