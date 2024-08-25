import axios from 'axios';
import { UserResponse } from './user.types';

const API_URL = import.meta.env.VITE_API_URL;

export async function getUser(token: string): Promise<UserResponse | void> {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Catch get user error', error);
  }
}
