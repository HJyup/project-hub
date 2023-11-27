import { useMutation } from "react-query";

import { useToast } from "@/components/ui/use-toast";
import { UserService } from "@/lib/services";
import UserRegistrationData from "@/lib/services/user/types/user-registration-data";
import { User } from "@/types/user";

export const useUserRegisterMutation = () => {
  const { toast } = useToast();

  const onSuccess = (data: User, onSuccessCallback?: () => void) => {
    if (onSuccessCallback) {
      onSuccessCallback();
    }
    toast({
      title: "Registration was successful",
      description: `Welcome, ${data.username}`,
    });
  };

  const onError = (error: Error) => {
    if (error) {
      toast({
        title: "Registration was unsuccessful",
        description: error.message || "Please, check your data",
      });
    }
  };

  const { mutate } = useMutation(
    async (userData: UserRegistrationData) =>
      UserService.registerUser(userData),
    { onSuccess: (data) => onSuccess(data), onError },
  );

  return (userData: UserRegistrationData, onSuccessCallback?: () => void) => {
    mutate(userData, {
      onSuccess: (data) => onSuccess(data, onSuccessCallback),
      onError,
    });
  };
};

export default useUserRegisterMutation;
