"use client";

import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { useSession } from "next-auth/react";

import MainTabsLayout from "@/components/layout/main-tabs-layout";
import CreateProjectDialog from "@/components/modules/create-project-dialog";
import MainTitle from "@/components/modules/main-title";
import ProjectCard from "@/components/modules/project-card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { formatDate } from "@/lib/utils";
import { projectService } from "@/services/project";
import { userService } from "@/services/user";
import { ProjectType } from "@/types/project";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const session = useSession();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { data: projects, isLoading } = useQuery(
    ["projects", session.data?.user.id],
    () => userService.getProjects(session.data?.user.id),
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = !isLoading
    ? projects.data.filter((project: ProjectType) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : "";

  const onSubmit = async (values: {
    name: string;
    description: string;
    deadline: string;
  }) => {
    try {
      await projectService.createProject({
        name: values.name,
        description: values.description,
        deadline: values.deadline,
        userId: Number(session.data?.user.id),
      });

      toast({
        title: "Project was created",
        description: `Let's explore ${values.name}`,
      });

      setOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Project creation was unsuccessful",
          description: "Please, check your data",
        });
      }
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
          className="md:w-[480px] h-[36px]"
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
        {!isLoading &&
          filteredProjects.map((project: ProjectType, index: number) => (
            <div key={index} className="w-full lg:w-1/3 mb-4 lg:px-2">
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
