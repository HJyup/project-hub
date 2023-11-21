export type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
};

export type UserRegistrationData = Pick<
  UserType,
  "username" | "email" | "password"
>;
