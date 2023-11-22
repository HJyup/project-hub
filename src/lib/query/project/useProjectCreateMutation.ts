"use client";

import { useMutation } from "react-query";
import { useSession } from "next-auth/react";

import { useToast } from "@/components/ui/use-toast";
import { ProjectService } from "@/lib/services";
import CreateProject from "@/lib/services/project/types/create-project";

const useProjectCreateMutation = () => {
  const { toast } = useToast();
  const session = useSession();
  const userId = Number(session.data?.user.id);

  return useMutation(
    async (newProjectData: CreateProject) => {
      if (userId !== undefined) {
        return ProjectService.createProject({ ...newProjectData, userId });
      }
    },
    {
      onSuccess: () => {
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
