import { Item } from '../item/item.types';
import { User } from '../user/user.types';

export type Order = {
  id: number;
  status: string;
  createdAt: string;
  user: User;
};

export type OrderItem = {
  item: Item;
  quantity: number;
};
