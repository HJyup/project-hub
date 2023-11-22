import { Category } from "@/types/category";
import { Task } from "@/types/task";

export type ProjectStatus =
  | "Planning"
  | "In Progress"
  | "Completed"
  | "On hold";

export type Project = {
  id: number;
  name: string;
  description: string;
  deadline: Date;
  status?: ProjectStatus;
  userId: number;
  category?: Category;
};

export type ProjectsWithTask = Project & {
  task: Task[];
};
