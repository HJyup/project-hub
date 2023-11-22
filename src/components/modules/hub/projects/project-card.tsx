import { CircleIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectCard = ({
  id,
  title,
  description,
  deadline,
  type,
}: {
  id: number;
  title: string;
  description: string;
  deadline: string;
  type: string;
}) => {
  return (
    <Link href={`./projects/${id}`}>
      <Card className="w-full lg:h-[210px] hover:border-accent">
        <CardHeader className="flex flex-col">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="overflow-auto">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex text-sm text-muted-foreground gap-6 justify-between">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 text-red-300" />
              {type}
            </div>
            <div>{deadline}</div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
