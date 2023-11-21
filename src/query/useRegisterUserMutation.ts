"use client";

import { useMutation } from "react-query";

import { useToast } from "@/components/ui/use-toast";
import { UserService } from "@/services/user";
import { UserRegistrationData } from "@/types/user";

export const useRegisterUserMutation = () => {
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

export default useRegisterUserMutation;
