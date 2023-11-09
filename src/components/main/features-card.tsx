import { ReactNode } from "react";
import {
  KanbanSquareIcon,
  LayoutListIcon,
  PieChartIcon,
  RepeatIcon,
  TargetIcon,
  Users2Icon,
} from "lucide-react";

import { BadgeProps } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FeatureCardData = {
  icon: ReactNode;
  title: string;
  description: string;
  badgeProps: BadgeProps;
};

export const cardsData: FeatureCardData[] = [
  {
    icon: <KanbanSquareIcon />,
    title: "Projects",
    description: "Organise all your chores in one place.",
    badgeProps: {
      variant: "outline",
      className: "border-teal-700 text-teal-700 font-medium mt-3 w-fit",
      children: "in development",
    },
  },
  {
    icon: <TargetIcon />,
    title: "Tasks",
    description: "Organize all your thoughts about the problem.",
    badgeProps: {
      variant: "outline",
      className: "border-teal-700 text-teal-700 font-medium mt-3 w-fit",
      children: "in development",
    },
  },
  {
    icon: <PieChartIcon />,
    title: "Analytics",
    description: "Assess your productivity changes here.",
    badgeProps: {
      variant: "outline",
      className: "border-blue-700 text-blue-700 font-medium mt-3 w-fit",
      children: "coming soon",
    },
  },
  {
    icon: <Users2Icon />,
    title: "Teams",
    description: "Optimise your time together.",
    badgeProps: {
      variant: "outline",
      className: "border-slate-700 text-slate-700 font-medium mt-3 w-fit",
      children: "coming later",
    },
  },
  {
    icon: <LayoutListIcon />,
    title: "To-do",
    description: "Don't forget about basics.",
    badgeProps: {
      variant: "outline",
      className: "border-slate-700 text-slate-700 font-medium mt-3 w-fit",
      children: "coming later",
    },
  },
  {
    icon: <RepeatIcon />,
    title: "Habits",
    description: "Build and track your habits.",
    badgeProps: {
      variant: "outline",
      className: "border-slate-700 text-slate-700 font-medium mt-3 w-fit",
      children: "coming later",
    },
  },
];

const FeaturesCard = ({
  icon,
  title,
  description,
  badge,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  badge: ReactNode;
}) => {
  return (
    <Card className="w-[380px] m-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        {badge}
      </CardHeader>
    </Card>
  );
};

export default FeaturesCard;
