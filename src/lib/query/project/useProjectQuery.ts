import { useQuery } from "react-query";

import { useToast } from "@/components/ui/use-toast";
import { ProjectService } from "@/lib/services";

const useProjectQuery = (projectId: string, onSuccessCallback?: () => void) => {
  const { toast } = useToast();

  const onSuccess = () => {
    if (onSuccessCallback) {
      onSuccessCallback();
    }
  };

  const onError = (error: Error) => {
    if (error) {
      toast({
        title: "Problem with fetching project",
        description: error.message,
      });
    }
  };

  const { data, isLoading, isError } = useQuery(
    "project",
    () => ProjectService.getProject(projectId),
    { onSuccess, onError },
  );

  return [data, isLoading, isError];
};

export default useProjectQuery;
