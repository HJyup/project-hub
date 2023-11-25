import request from "@/lib/services/request";

import UserRegistrationData from "./types/user-registration-data";

export class UserService {
  static registerUser = async (data: UserRegistrationData) => {
    return await request.post({
      url: "/api/auth/sign-up",
      body: data,
    });
  };

  static getUser = async (userId: number) => {
    return await request.get({
      url: `/api/user/${userId}`,
    });
  };

  static getProjects = async (userId: number) => {
    return await request.get({
      url: `/api/user/${userId}/projects`,
    });
  };
}
