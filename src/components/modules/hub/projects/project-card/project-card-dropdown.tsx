import { ReactNode } from "react";
import { TrashIcon } from "@radix-ui/react-icons";

import DeleteProjectDialog from "@/components/modules/hub/projects/delete-project-dialog";
import { buttonVariants } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils/cn";

const ProjectCardDropdown = ({
  handleDelete,
  dialogTrigger,
}: {
  handleDelete: () => void;
  dialogTrigger: ReactNode;
}) => {
  return (
    <DropdownMenu>
      {dialogTrigger && dialogTrigger}
      <DropdownMenuContent
        align="end"
        alignOffset={-5}
        className="w-[165px]"
        forceMount
      >
        <DropdownMenuLabel>Project Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>Status</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Deadline</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DeleteProjectDialog
            handleDelete={handleDelete}
            dialogTrigger={
              <DialogTrigger
                className={cn(
                  "flex items-center gap-0.5 text-red-600 w-full",
                  buttonVariants({ variant: "ghost" }),
                )}
              >
                <TrashIcon className="mr-2 h-4 w-4" /> Delete Project
              </DialogTrigger>
            }
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectCardDropdown;
