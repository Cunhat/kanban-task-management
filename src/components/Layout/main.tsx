import { NextPage } from "next/types";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full bg-lines-100 dark:bg-customGrey-900">
      <main>{children}</main>
    </div>
  );
};
