"use client";

export class userService {
  static registerUser = async (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    const response = await fetch("/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    }

    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed");
  };

  static getUser = async (userId: string) => {
    const response = await fetch(`/api/user/${userId}`, {
      method: "GET",
    });

    if (response.ok) {
      return await response.json();
    }

    const errorData = await response.json();
    throw new Error(errorData.message || "Fetching user's data failed");
  };

  static getProjects = async (userId: string | undefined) => {
    const response = await fetch(`/api/user/${userId}/projects`, {
      method: "GET",
    });

    if (response.ok) {
      return await response.json();
    }

    const errorData = await response.json();
    throw new Error(errorData.message || "Fetching user's projects failed");
  };
}
