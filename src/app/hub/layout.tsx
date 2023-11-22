"use client";

import { ReactNode } from "react";

import NavigationBar from "@/components/modules/hub/navigation-bar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      <div className="p-10">{children}</div>
    </div>
  );
};

export default Layout;
