"use client";

import { useState } from "react";
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import TaskActionsDropdown from "@/components/modules/hub/projects/table/actions/task-actions-dropdown";
import columns from "@/components/modules/hub/projects/table/columns";
import Header from "@/components/modules/hub/projects/table/header";
import Pagination from "@/components/modules/hub/projects/table/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useCreateTaskMutation from "@/lib/query/project/useCreateTaskMutation";
import useDeleteTaskMutation from "@/lib/query/project/useDeleteTaskMutation";
import { Task } from "@/types/task";

const TaskTable = ({
  data,
  params,
}: {
  data: Task[];
  params: { projectId: string };
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const createTask = useCreateTaskMutation();
  const deleteTask = useDeleteTaskMutation();

  const handleCreate = () => {
    console.log("create");
  };

  columns.push({
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <TaskActionsDropdown onDelete={() => deleteTask(row.original.id)} />
    ),
  });

  const table = useReactTable({
    data,
    columns: columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <Header
        table={table}
        onClickCreate={() => createTask(params.projectId, handleCreate)}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination table={table} />
    </div>
  );
};

export default TaskTable;
