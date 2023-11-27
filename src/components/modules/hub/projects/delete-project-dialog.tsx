"use client";

import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DeleteProjectDialog = ({
  handleDelete,
  dialogTrigger,
}: {
  handleDelete: () => void;
  dialogTrigger: ReactNode;
}) => {
  return (
    <Dialog>
      {dialogTrigger && dialogTrigger}
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
