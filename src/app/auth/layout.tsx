"use client";

import { ReactNode } from "react";
import { Box } from "lucide-react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 hidden bg-zinc-900 lg:flex flex-col justify-between">
        <div className="flex items-center gap-3 m-5">
          <Box size="36px" color="white" />
          <h1 className="text-white text-3xl font-medium">Project Hub</h1>
        </div>
        <div className="m-5">
          <p className="text-lg text-muted-foreground">
            "This project literally gave me so much opportunity to simplify my
            daily productivity."
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
