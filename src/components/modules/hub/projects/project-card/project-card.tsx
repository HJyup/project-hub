import { ReactNode } from "react";
import { CircleIcon, StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProjectCard = ({
  id,
  title,
  description,
  deadline,
  type,
  dropdown,
}: {
  id: number;
  title: string;
  description: string;
  deadline: string;
  type: string;
  dropdown?: ReactNode;
}) => {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Link href={`./projects/${id}`}>
            <Button variant="secondary" className="px-3 shadow-none">
              Explore
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-[20px]" />
          {dropdown && dropdown}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            {type}
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />
            20k
          </div>
          <div>{deadline}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
