export type ResponseForm<T> = {
  isSuccess: boolean;
  message: string;
  data: T;
};

export type User = {
  id: number;
  username: string;
  role: string;
};

export type Auth = {
  token: string;
};
