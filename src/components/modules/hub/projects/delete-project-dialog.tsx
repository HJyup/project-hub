"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils/cn";

const DeleteProjectDialog = ({
  handleDelete,
}: {
  handleDelete: () => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "flex gap-1 font-normal",
          buttonVariants({ size: "sm", variant: "destructive" }),
        )}
      >
        <p>Delete project</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete a project</DialogTitle>
          <DialogDescription>
            Are you sure that you want to a delete a project?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between mt-5">
          <DialogClose asChild>
            <Button className="w-1/3" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button className="w-1/3" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProjectDialog;
