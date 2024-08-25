import axios from 'axios';
import { AuthRequest, AuthResponse } from './auth.types';

const API_URL = import.meta.env.VITE_API_URL;

export async function registerUser(
  request: AuthRequest,
): Promise<AuthResponse | void> {
  try {
    const response = await axios.post(`${API_URL}/register`, request);
    return response.data;
  } catch (error) {
    console.log('Catch register error', error);
  }
}

export async function loginUser(
  request: AuthRequest,
): Promise<AuthResponse | void> {
  try {
    const response = await axios.post(`${API_URL}/login`, request);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Catch login error', error);
  }
}
