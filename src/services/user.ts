import request from "@/lib/request";
import { UserRegistrationData } from "@/types/user";

export class UserService {
  static registerUser = async (data: UserRegistrationData) => {
    return await request.post({
      url: "/api/auth/sign-up",
      body: data,
    });
  };

  static getUser = async (userId: string) => {
    return await request.get({
      url: `/api/user/${userId}`,
    });
  };

  static getProjects = async (userId: string) => {
    return await request.get({
      url: `/api/user/${userId}/projects`,
    });
  };
}
