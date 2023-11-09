import { CircleIcon } from "@radix-ui/react-icons";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Page = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">
          Organise all your chores in one place.
        </p>
      </div>
      <div className="flex justify-between">
        <Input placeholder="Project name" className="w-[480px]" />
        <Button className="flex gap-1">
          <PlusIcon />
          Create a project
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Card className="w-[420px]">
          <CardHeader className="flex flex-col">
            <CardTitle>University Admission</CardTitle>
            <CardDescription>
              Achieve your dreams. Apply through UCAS and finish.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex text-sm text-muted-foreground gap-6 justify-between">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 text-red-300" />
                Studying
              </div>
              <div>20 November 2023</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
