import { ReactNode } from "react";

export type Task = {
  name: string;
  description: string;
  priority: number;
  project: Project;
  startDate: Date;
  deadline: Date;

  duration?: number;
  dependencies?: Task[];
  category?: string;
  timeOfDayPreference?: "morning" | "afternoon" | "evening";
};

export type Project = {
  name: string;
  description: string;
  label: string;
  deadline: Date;
  tasks: Task[];
};

export type Team = {
  name: string;
  users: User[];
  projects: Project[];
};

export type User = {
  name: string;
  avatar: ReactNode;
  security: UserData;
  projects: Project[];
};

export type UserData = {
  email: string;
  password: string;
};
