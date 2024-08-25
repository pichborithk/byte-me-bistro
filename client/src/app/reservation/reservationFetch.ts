import axios from 'axios';
import { Reservation } from './reservation.types';

const API_URL = import.meta.env.VITE_API_URL;

export async function getReservations(): Promise<ResponseForm<
  Reservation[]
> | void> {
  try {
    const response = await axios.get(`${API_URL}/reservations`);
    return response.data;
  } catch (error) {
    console.log('Catch get reservations error', error);
  }
}
