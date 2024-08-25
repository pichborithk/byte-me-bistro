import axios from 'axios';

import { ResponseForm } from '../../types';
import { Order } from './order.types';

const API_URL = import.meta.env.VITE_API_URL;

export async function getOrders(): Promise<ResponseForm<Order[]> | void> {
  try {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
  } catch (error) {
    console.log('Catch get items error', error);
  }
}
