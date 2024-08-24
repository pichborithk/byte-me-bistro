import { User } from ".";

export type Reservation = {
  id: number;
  status: string;
  date: string;
  time: string;
  partySize: number;
  user: User;
};
