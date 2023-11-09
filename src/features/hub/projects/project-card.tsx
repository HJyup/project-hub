import { CircleIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectCard = ({
  title,
  description,
  deadline,
  type,
}: {
  title: string;
  description: string;
  deadline: string;
  type: string;
}) => {
  return (
    <Card className="w-full lg:h-[200px]">
      <CardHeader className="flex flex-col">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
  );
};

export default ProjectCard;
