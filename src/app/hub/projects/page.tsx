import { PlusIcon } from "lucide-react";

import MainTabsLayout from "@/components/layout/main-tabs-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainTitle from "@/features/hub/main-title";
import ProjectCard from "@/features/hub/projects/project-card";
import { projects } from "@/features/hub/projects/types/project-test";

const Page = () => {
  return (
    <MainTabsLayout>
      <MainTitle
        title="Projects"
        description="Organise all your chores in one place."
      />
      <div className="flex justify-between gap-2">
        <Input placeholder="Project name" className="md:w-[480px] h-[36px]" />
        <Button className="flex gap-1 font-normal" size="sm">
          <PlusIcon size="16px" />
          <p className="hidden md:block">Create a project</p>
        </Button>
      </div>
      <div className="w-full flex flex-col flex-wrap lg:flex-row lg:-mx-2">
        {projects.map((project, index) => (
          <div key={index} className="w-full lg:w-1/3 mb-4 lg:px-2">
            <ProjectCard
              title={project.title}
              description={project.description}
              deadline={project.deadline}
              type={project.type}
            />
          </div>
        ))}
      </div>
    </MainTabsLayout>
  );
};

export default Page;
