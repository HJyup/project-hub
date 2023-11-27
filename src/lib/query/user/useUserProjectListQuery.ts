import { useQuery } from "react-query";
import { useSession } from "next-auth/react";

import { useToast } from "@/components/ui/use-toast";
import { UserService } from "@/lib/services";

const useUserProjectListQuery = (onSuccessCallback?: () => void) => {
  const { toast } = useToast();
  const session = useSession();
  const userId = Number(session.data?.user.id);

  const onSuccess = () => {
    if (onSuccessCallback) {
      onSuccessCallback();
    }
  };

  const onError = (error: Error) => {
    if (error) {
      toast({
        title: "Problem with fetching projects",
        description: error.message,
      });
    }
  };

  const { data, isLoading, isError } = useQuery(
    ["projects", "list", userId],
    () => {
      if (userId !== undefined) {
        return UserService.getProjects(userId);
      }
    },
    { onSuccess, onError },
  );

  return [data, isLoading, isError];
};

export default useUserProjectListQuery;
