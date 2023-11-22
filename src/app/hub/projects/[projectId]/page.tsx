"use client";

import Settings from "@/app/hub/projects/[projectId]/(tabs)/Settings";
import Tasks from "@/app/hub/projects/[projectId]/(tabs)/Tasks";
import MainTabsLayout from "@/components/layout/main-tabs-layout";
import MainTitle from "@/components/modules/main/main-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useProjectQuery from "@/lib/query/project/useProjectQuery";

const Page = ({ params }: { params: { projectId: string } }) => {
  const [project, isLoading] = useProjectQuery(params.projectId);

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
          <Tasks />
        </TabsContent>
        <TabsContent value="settings">
          <Settings projectId={project.data.id} />
        </TabsContent>
      </Tabs>
    </MainTabsLayout>
  );
};

export default Page;
