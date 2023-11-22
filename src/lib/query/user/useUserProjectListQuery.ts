"use client";

import { useQuery } from "react-query";
import { useSession } from "next-auth/react";

import { UserService } from "@/lib/services";

const useUserProjectListQuery = () => {
  const session = useSession();
  const userId = session.data?.user.id;

  const { data, isLoading, isError } = useQuery(["projects", userId], () => {
    if (userId !== undefined) {
      return UserService.getProjects(userId);
    }
  });

  return [data, isLoading, isError];
};

export default useUserProjectListQuery;
