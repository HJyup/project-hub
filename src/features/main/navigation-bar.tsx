"use client";

import { HTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { navigationsTest } from "@/features/main/types/navigations-test";
import { cn } from "@/lib/utils";

interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {}

const NavigationBar = ({ className, ...props }: NavigationBarProps) => {
  const session = useSession();
  const pathname = usePathname();

  return (
    <div className="flex p-3 border-b border-muted justify-center md:justify-between items-center">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("flex items-center", className)} {...props}>
          {navigationsTest.map((navigation) => (
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
