import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

import TaskPriorityMapper from "@/components/modules/hub/projects/table/mappers/task-priority-mapper";
import TaskStatusMapper from "@/components/modules/hub/projects/table/mappers/task-status-mapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils/formatDate";
import { Task, TaskCategory } from "@/types/task";

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "deadline",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Deadline
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date: Date = row.getValue("deadline");

      return (
        <div className="w-[90px] ml-3 text-muted-foreground">
          {formatDate(date)}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => {
      return <div>Title</div>;
    },
    cell: ({ row }) => {
      const category: TaskCategory | undefined = row.original.category;
      return (
        <div className="flex space-x-2">
          {category && <Badge variant="outline">{category.categoryName}</Badge>}
          <span className="max-w-[500px] truncate">{row.getValue("name")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => {
      return <div>Description</div>;
    },
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground">
          {row.getValue("description")}
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Priority
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex w-[100px] items-center">
        {TaskPriorityMapper(row.getValue("priority"))}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => TaskStatusMapper(row.getValue("status")),
  },
];

export default columns;
