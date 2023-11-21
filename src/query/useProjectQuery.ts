import { useQuery } from "react-query";

import { useToast } from "@/components/ui/use-toast";
import { ProjectService } from "@/services/project";

const useProjectQuery = (projectId: string) => {
  const { toast } = useToast();
  const { data, isLoading, isError } = useQuery(
    ["projects", projectId],
    () => ProjectService.getProject(projectId),
    {
      onError: (error) => {
        if (error instanceof Error) {
          toast({
            title: "Problem with fetching projects",
            description: error.message,
          });
        }
      },
    },
  );

  return [data, isLoading, isError];
};

export default useProjectQuery;
