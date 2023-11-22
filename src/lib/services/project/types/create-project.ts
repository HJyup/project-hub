import { Project } from "@/types/project";

type CreateProject = Pick<Project, "name" | "description" | "deadline"> &
  Partial<Pick<Project, "userId">>;

export default CreateProject;
