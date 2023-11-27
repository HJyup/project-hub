"use client";

import { ChangeEvent, useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import MainTabsLayout from "@/components/layout/main-tabs-layout";
import CreateProjectDialog from "@/components/modules/hub/projects/create-project-dialog";
import ProjectCard from "@/components/modules/hub/projects/project-card/project-card";
import ProjectCardDropdown from "@/components/modules/hub/projects/project-card/project-card-dropdown";
import MainTitle from "@/components/modules/main/main-title";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import useDeleteProjectMutation from "@/lib/query/project/useDeleteProjectMutation";
import useProjectCreateMutation from "@/lib/query/project/useProjectCreateMutation";
import useUserProjectListQuery from "@/lib/query/user/useUserProjectListQuery";
import { formatDate } from "@/lib/utils/formatDate";
import { Project } from "@/types/project";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, isLoading] = useUserProjectListQuery();
  const createProject = useProjectCreateMutation();
  const handleDeleteProject = useDeleteProjectMutation();

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
    createProject(
      {
        name: values.name,
        description: values.description,
        deadline: new Date(values.deadline),
      },
      () => setOpen(false),
    );
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
              dropdown={
                <ProjectCardDropdown
                  handleDelete={() => handleDeleteProject(project.id)}
                  dialogTrigger={
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" className="px-2 shadow-none">
                        <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                  }
                />
              }
            />
          </div>
        ))}
      </div>
    </MainTabsLayout>
  );
};

export default Page;
