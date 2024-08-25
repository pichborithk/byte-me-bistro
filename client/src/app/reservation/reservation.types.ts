import { User } from '../user/user.types';

export type Reservation = {
  id: number;
  status: string;
  date: string;
  time: string;
  partySize: number;
  user: User;
};
