import CreateProject from "@/lib/services/project/types/create-project";
import request from "@/lib/services/request";

export class ProjectService {
  static getProject = async (projectId: string | number) => {
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

  static deleteProject = async (projectId: string | number) => {
    return await request.delete({
      url: `/api/hub/projects/${projectId}`,
    });
  };

  static createTask = async (projectId: string | number) => {
    return await request.post({
      url: `/api/hub/projects/${projectId}/task`,
    });
  };

  static deleteTask = async (taskId: string | number) => {
    return await request.delete({
      url: `/api/hub/projects/task/${taskId}`,
    });
  };
}
