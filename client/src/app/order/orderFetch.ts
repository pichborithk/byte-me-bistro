import axios from 'axios';

import { ResponseForm } from '../../types';
import { Order, OrderItem } from './order.types';

const API_URL = import.meta.env.VITE_API_URL;

export async function getOrders(): Promise<ResponseForm<Order[]> | void> {
  try {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
  } catch (error) {
    console.log('Catch get orders error', error);
  }
}

export async function getItemsInOrder(
  id: number,
): Promise<ResponseForm<OrderItem[]> | void> {
  try {
    const response = await axios.get(`${API_URL}/orders/${id}`);
    return response.data;
  } catch (error) {
    console.log('Catch get items in order  error', error);
  }
}
