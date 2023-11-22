"use client";

import { useMutation } from "react-query";

import { useToast } from "@/components/ui/use-toast";
import { UserService } from "@/lib/services";
import UserRegistrationData from "@/lib/services/user/types/user-registration-data";

export const useUserRegisterMutation = () => {
  const { toast } = useToast();

  return useMutation(
    async (userData: UserRegistrationData) =>
      UserService.registerUser(userData),
    {
      onSuccess: (data) => {
        toast({
          title: "Registration was successful",
          description: `Welcome, ${data.username}`,
        });
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast({
            title: "Registration was unsuccessful",
            description: error.message || "Please, check your data",
          });
        }
      },
    },
  );
};

export default useUserRegisterMutation;
