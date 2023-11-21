import { BaseType } from "@/types/base/base-type";
import { CategoryType } from "@/types/base/category";
import { Priority } from "@/types/base/priority";

export type TaskStatus =
  | "Not Started"
  | "In Progress"
  | "Completed"
  | "Blocked";

export type TaskType = BaseType & {
  status: TaskStatus;
  priority: Priority;
  duration?: number;
  taskDate: Date;
  deadline: Date;
  category: TaskCategoryType;
  projectId: number;
};

export type TaskCategoryType = CategoryType;
