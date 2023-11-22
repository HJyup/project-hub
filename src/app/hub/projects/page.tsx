"use client";

import { ChangeEvent, useState } from "react";

import MainTabsLayout from "@/components/layout/main-tabs-layout";
import CreateProjectDialog from "@/components/modules/hub/projects/create-project-dialog";
import ProjectCard from "@/components/modules/hub/projects/project-card";
import MainTitle from "@/components/modules/main/main-title";
import { Input } from "@/components/ui/input";
import useProjectCreateMutation from "@/lib/query/project/useProjectCreateMutation";
import useUserProjectListQuery from "@/lib/query/user/useUserProjectListQuery";
import { formatDate } from "@/lib/utils/formatDate";
import { Project } from "@/types/project";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, isLoading] = useUserProjectListQuery();
  const createProject = useProjectCreateMutation();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects =
    !isLoading && projects
      ? projects.data.filter((project: Project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : [];

  const onSubmit = (values: {
    name: string;
    description: string;
    deadline: string;
  }) => {
    createProject.mutate({
      name: values.name,
      description: values.description,
      deadline: new Date(values.deadline),
    });
    if (createProject.isSuccess) {
      setOpen(false);
    }
  };

  return (
    <MainTabsLayout>
      <MainTitle
        title="Projects"
        description="Organise all your chores in one place."
      />
      <div className="flex justify-between gap-2">
        <Input
          placeholder="Project name"
          className="md:w-[480px] h-[32px]"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <CreateProjectDialog
          open={open}
          setOpen={setOpen}
          onSubmit={onSubmit}
        />
      </div>
      <div className="w-full flex flex-col flex-wrap lg:flex-row lg:-mx-2">
        {filteredProjects.map((project: Project) => (
          <div key={project.id} className="w-full lg:w-1/3 mb-4 lg:px-2">
            <ProjectCard
              id={project.id}
              title={project.name}
              description={project.description}
              deadline={formatDate(project.deadline)}
              type="Test"
            />
          </div>
        ))}
      </div>
    </MainTabsLayout>
  );
};

export default Page;
