"use client";

import { ReactNode, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import NavigationBar from "@/features/main/navigation-bar";

export interface UserResponse {
  user: string | null;
  error: AxiosError | null;
}

export async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get("/api/auth/me");

    return {
      user: data,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;

    return {
      user: null,
      error,
    };
  }
}

const Layout = ({ children }: { children: ReactNode }) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { user, error } = await getUser();

      if (error) {
        push("/auth/login");
        return;
      }

      setIsSuccess(true);
    })();
  }, [push]);

  if (!isSuccess) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        LOADING!!!
      </div>
    );
  }
  return (
    <div>
      <NavigationBar />
      <div className="p-10">{children}</div>
    </div>
  );
};

export default Layout;
