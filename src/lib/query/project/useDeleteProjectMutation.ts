import { useMutation, useQueryClient } from "react-query";

import { useToast } from "@/components/ui/use-toast";
import { ProjectService } from "@/lib/services";

const useDeleteProjectMutation = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const onSuccess = (onSuccessCallback?: () => void) => {
    queryClient.invalidateQueries("projects");
    toast({ title: "Project deleted successfully" });
    if (onSuccessCallback) {
      onSuccessCallback();
    }
  };

  const onError = (error: Error) => {
    toast({ title: error.message });
  };

  const { mutate } = useMutation(
    (projectId: number | string) =>
      ProjectService.deleteProject(`${projectId}`),
    { onSuccess: () => onSuccess(), onError },
  );

  return (projectId: number | string, onSuccessCallback?: () => void) => {
    mutate(projectId, {
      onSuccess: () => onSuccess(onSuccessCallback),
      onError,
    });
  };
};

export default useDeleteProjectMutation;
