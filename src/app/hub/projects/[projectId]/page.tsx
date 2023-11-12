"use client";

import { useQuery } from "react-query";

import Settings from "@/app/hub/projects/[projectId]/(tabs)/Settings";
import MainTabsLayout from "@/components/layout/main-tabs-layout";
import MainTitle from "@/components/modules/main-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectService } from "@/services/project";

const Page = ({ params }: { params: { projectId: string } }) => {
  const { data: project, isLoading } = useQuery(
    ["projects", params.projectId],
    () => projectService.getProject(params.projectId),
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <MainTabsLayout>
      <MainTitle
        title={project.data.name}
        description={project.data.description}
      />
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Some general information</TabsContent>
        <TabsContent value="tasks">All tasks</TabsContent>
        <TabsContent value="settings">
          <Settings projectId={project.data.id} />
        </TabsContent>
      </Tabs>
    </MainTabsLayout>
  );
};

export default Page;
