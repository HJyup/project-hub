"use client";

import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { useSession } from "next-auth/react";

import { useToast } from "@/components/ui/use-toast";
import { ProjectService } from "@/lib/services";
import CreateProject from "@/lib/services/project/types/create-project";

const useProjectCreateMutation = (onSuccessCallback: () => void) => {
  const { toast } = useToast();
  const session = useSession();
  const queryClient = useQueryClient();
  const userId = Number(session.data?.user.id);

  return useMutation(
    async (newProjectData: CreateProject) => {
      if (userId !== undefined) {
        return ProjectService.createProject({ ...newProjectData, userId });
      }
    },
    {
      onSuccess: () => {
        onSuccessCallback();
        queryClient.invalidateQueries(["projects", "list", userId]);
        toast({
          title: "Project was created",
        });
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast({
            title: "Project creation was unsuccessful",
            description: error.message,
          });
        }
      },
    },
  );
};

export default useProjectCreateMutation;
