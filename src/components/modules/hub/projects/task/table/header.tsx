import { Table } from "@tanstack/table-core";
import { PlusIcon } from "lucide-react";

import TaskViewDropdown from "@/components/modules/hub/projects/task/table/actions/task-view-dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Task } from "@/types/task";

const Header = ({ table }: { table: Table<Task> }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <Input
        placeholder="Filter names..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm h-[32px]"
      />
      <div className="flex gap-3">
        <TaskViewDropdown table={table} />
        <Button
          variant="outline"
          className="ml-auto flex gap-1 items-center"
          size="sm"
        >
          <PlusIcon size={16} />
          Task
        </Button>
      </div>
    </div>
  );
};

export default Header;
