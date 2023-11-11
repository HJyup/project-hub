"use client";

import { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 hidden bg-zinc-800 lg:flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-medium">Project Hub</h1>
        <Badge variant="destructive" className="mt-2">
          This page is currently in development
        </Badge>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
