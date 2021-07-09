

export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  title: string;
};

export type NewUser = Omit<User, "id">;


export type RegisterUserForm = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  title: string;
};