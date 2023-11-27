import { useMutation, useQueryClient } from "react-query";

import { useToast } from "@/components/ui/use-toast";
import { ProjectService } from "@/lib/services";

const UseDeleteTaskMutation = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const onSuccess = (onSuccessCallback?: () => void) => {
    queryClient.invalidateQueries("project");
    if (onSuccessCallback) {
      onSuccessCallback();
    }
  };

  const onError = (error: Error) => {
    toast({ title: error.message });
  };

  const { mutate } = useMutation(
    (taskId: number | string) => ProjectService.deleteTask(taskId),
    { onSuccess: () => onSuccess(), onError },
  );

  return (taskId: number | string, onSuccessCallback?: () => void) => {
    mutate(taskId, {
      onSuccess: () => onSuccess(onSuccessCallback),
      onError,
    });
  };
};

export default UseDeleteTaskMutation;
