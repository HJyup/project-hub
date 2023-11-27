import { Category } from "@/types/category";

export type TaskStatus = "NotStarted" | "Blocked" | "InProgress" | "Completed";

export type Task = {
  id: number;
  name: string;
  description?: string;
  priority?: TaskPriority;
  duration?: number;
  taskDate?: Date;
  deadline?: Date;
  status?: TaskStatus;
  category?: TaskCategory;
  projectId: number;
};

export type TaskPriority = 1 | 2 | 3;

export type TaskCategory = Category;
