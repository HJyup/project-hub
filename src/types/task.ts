import { Category } from "@/types/category";

export type TaskStatus =
  | "Not Started"
  | "In Progress"
  | "Completed"
  | "Blocked";

export type Task = {
  id: number;
  name: string;
  description?: string;
  priority?: number;
  duration?: number;
  taskDate: Date;
  deadline: Date;
  status?: TaskStatus;
  category?: Category;
  projectId: number;
};
