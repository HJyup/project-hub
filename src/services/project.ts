import request from "@/lib/request";
import { CreateProject } from "@/types/project";

export class ProjectService {
  static getProject = async (projectId: string) => {
    return await request.get({
      url: `/api/hub/projects/${projectId}`,
    });
  };

  static createProject = async (data: CreateProject) => {
    return await request.post({
      url: "/api/hub/projects",
      body: data,
    });
  };

  static deleteProject = async (projectId: string) => {
    return await request.delete({
      url: `/api/hub/projects/${projectId}`,
    });
  };
}
