"use client";

export class projectService {
  static getProject = async (projectId: string) => {
    const response = await fetch(`/api/hub/projects/${projectId}`, {
      method: "GET",
    });

    if (response.ok) {
      return await response.json();
    }

    const errorData = await response.json();
    throw new Error(errorData.message || "Fetching project data failed");
  };

  static createProject = async (data: {
    name: string;
    description: string;
    deadline: string;
    userId: number;
  }) => {
    const deadlineDate = new Date(data.deadline);

    const requestData = {
      ...data,
      deadline: deadlineDate.toISOString(),
    };

    const response = await fetch("/api/hub/projects", {
      method: "POST",
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      return await response.json();
    }

    const errorData = await response.json();
    throw new Error(errorData.message || "Create project was unsuccessful");
  };

  static deleteProject = async (projectId: string) => {
    const response = await fetch(`/api/hub/projects/${projectId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return await response.json();
    }

    const errorData = await response.json();
    throw new Error(errorData.message || "Deleting project data failed");
  };
}
