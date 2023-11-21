import { useRouter } from "next/navigation";

import DeleteProjectDialog from "@/components/modules/projects/delete-project-dialog";
import { useToast } from "@/components/ui/use-toast";
import { ProjectService } from "@/services/project";

const Settings = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const { toast } = useToast();
  const handleDelete = async () => {
    try {
      await ProjectService.deleteProject(projectId);

      toast({
        title: "Project deleted successfully",
      });

      router.back();
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: error.message,
        });
      }
    }
  };

  return (
    <div>
      <DeleteProjectDialog handleDelete={handleDelete} />
    </div>
  );
};

export default Settings;
