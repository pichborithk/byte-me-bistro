import { User } from ".";

export type Order = {
  id: number;
  status: string;
  createdAt: string;
  user: User;
};
