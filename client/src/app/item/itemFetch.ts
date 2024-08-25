import axios from 'axios';
import { ResponseForm } from '../../types';
import { Item } from './item.types';

const API_URL = import.meta.env.VITE_API_URL;

export async function getMenu(): Promise<ResponseForm<Item[]> | void> {
  try {
    const response = await axios.get(`${API_URL}/items`);
    return response.data;
  } catch (error) {
    console.log('Catch get items error', error);
  }
}
