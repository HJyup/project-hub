import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TaskActionsDropdown = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Priority</DropdownMenuItem>
        <DropdownMenuItem>Status</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500" onClick={onDelete}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TaskActionsDropdown;
