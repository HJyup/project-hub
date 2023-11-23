import CreateProject from "@/lib/services/project/types/create-project";
import request from "@/lib/services/request";

export class ProjectService {
  static getProject = async (projectId: string) => {
    return await request.get({
      url: `http://localhost:3000/api/hub/projects/${projectId}`,
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
