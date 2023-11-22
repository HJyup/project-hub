import { User } from "@/types/user";

type UserRegistrationData = Pick<User, "username" | "email" | "password">;

export default UserRegistrationData;
