export type User = {
  id: number;
  username: string;
  role: string;
};

export type UserResponse = ResponseForm<User>;
