"use client";

import { HTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils/cn";

interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {}

export const navigation = [
  {
    name: "Projects",
    href: "/hub/projects",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/cards",
  },
];

const NavigationBar = ({ className, ...props }: NavigationBarProps) => {
  const session = useSession();
  const pathname = usePathname();

  return (
    <div className="flex p-3 border-b border-muted justify-center md:justify-between items-center">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("flex items-center", className)} {...props}>
          {navigation.map((navigation) => (
            <Link
              href={navigation.href}
              key={navigation.href}
              className={cn(
                "flex items-center px-4",
                pathname?.startsWith(navigation.href)
                  ? "font-medium text-primary"
                  : "font-normal text-muted-foreground",
              )}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
      <div className="hidden gap-2 items-center pr-4 md:flex">
        <div>{session.data?.user?.name}</div>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/89708817?v=4" />
        </Avatar>
      </div>
    </div>
  );
};

export default NavigationBar;
