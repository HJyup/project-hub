"use client";

import MainTabsLayout from "@/components/layout/main-tabs-layout";
import TaskTable from "@/components/modules/hub/projects/table/table-page";
import MainTitle from "@/components/modules/main/main-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useProjectQuery from "@/lib/query/project/useProjectQuery";

const Page = ({ params }: { params: { projectId: string } }) => {
  const [project, isLoading] = useProjectQuery(params.projectId);
  const tasks = !isLoading && project.data.tasks ? project.data.tasks : [];

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
        <TabsList className="w-full sm:w-fit">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Some general information</TabsContent>
        <TabsContent value="tasks">
          <TaskTable params={params} data={tasks} />
        </TabsContent>
        <TabsContent value="settings">
          <TabsContent value="overview">Some settings for project</TabsContent>
        </TabsContent>
      </Tabs>
    </MainTabsLayout>
  );
};

export default Page;
