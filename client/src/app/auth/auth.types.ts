import { ResponseForm } from "../../types";

export type AuthRequest = {
  username: string;
  password: string;
};

export type AuthResponse = ResponseForm<{ token: string }>;
