import { useMutation, useQueryClient } from "react-query";
import { useSession } from "next-auth/react";

import { useToast } from "@/components/ui/use-toast";
import { ProjectService } from "@/lib/services";
import CreateProject from "@/lib/services/project/types/create-project";

const useProjectCreateMutation = () => {
  const { toast } = useToast();
  const session = useSession();
  const queryClient = useQueryClient();
  const userId = Number(session.data?.user.id);

  const onSuccess = (onSuccessCallback?: () => void) => {
    queryClient.invalidateQueries(["projects", "list", userId]);
    toast({ title: "Project was created" });
    if (onSuccessCallback) {
      onSuccessCallback();
    }
  };

  const onError = (error: Error) => {
    if (error) {
      toast({
        title: "Project creation was unsuccessful",
        description: error.message,
      });
    }
  };

  const { mutate } = useMutation(
    async (newProjectData: CreateProject) => {
      if (userId !== undefined) {
        return ProjectService.createProject({ ...newProjectData, userId });
      }
    },
    { onSuccess: () => onSuccess(), onError },
  );

  return (newProjectData: CreateProject, onSuccessCallback?: () => void) => {
    mutate(newProjectData, {
      onSuccess: () => onSuccess(onSuccessCallback),
      onError,
    });
  };
};

export default useProjectCreateMutation;
