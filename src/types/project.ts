import { BaseType } from "@/types/base/base-type";
import { CategoryType } from "@/types/base/category";
import { Priority } from "@/types/base/priority";

type ProjectStatus = "Planning" | "In Progress" | "Completed" | "On Hold";

export type ProjectType = BaseType & {
  category: ProjectCategoryType;
  status: ProjectStatus;
  priority: Priority;
  completionPercentage: number;
  deadline: Date;
  userId: number;
};

export type ProjectCategoryType = CategoryType;

export type CreateProject = Pick<
  ProjectType,
  "name" | "description" | "deadline" | "userId"
>;
