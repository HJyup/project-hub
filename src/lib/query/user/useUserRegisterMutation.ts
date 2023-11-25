"use client";

import { useMutation } from "react-query";

import { useToast } from "@/components/ui/use-toast";
import { UserService } from "@/lib/services";
import UserRegistrationData from "@/lib/services/user/types/user-registration-data";

export const useUserRegisterMutation = (onSuccessCallback: () => void) => {
  const { toast } = useToast();

  return useMutation(
    async (userData: UserRegistrationData) =>
      UserService.registerUser(userData),
    {
      onSuccess: (data) => {
        onSuccessCallback();
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
