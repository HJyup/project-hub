"use client";

import { HTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const examples = [
  {
    name: "Dashboard",
    href: "/hub/dashboard",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard",
  },
  {
    name: "Projects",
    href: "/hub/projects",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/cards",
  },
  {
    name: "Analytics",
    href: "/hub/analytics",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks",
  },
];

interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {}

export function NavigationBar({ className, ...props }: NavigationBarProps) {
  const pathname = usePathname();

  return (
    <div className="flex p-3 border-b border-muted justify-between items-center">
      <div className={cn("flex items-center", className)} {...props}>
        {examples.map((example) => (
          <Link
            href={example.href}
            key={example.href}
            className={cn(
              "flex items-center px-4",
              pathname?.startsWith(example.href)
                ? "font-medium text-primary"
                : "font-normal text-muted-foreground",
            )}
          >
            {example.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-2 items-center pr-4">
        HJyup
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/89708817?v=4" />
        </Avatar>
      </div>
    </div>
  );
}
