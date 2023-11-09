import { ReactNode } from "react";

const MainTabsLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-10">{children}</div>;
};

export default MainTabsLayout;
