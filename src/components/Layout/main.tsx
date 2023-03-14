import { NextPage } from "next/types";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Heading } from "../ui/Heading";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full bg-lines-100 dark:bg-customGrey-900">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

const NavBar: React.FC = () => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 dark:bg-customGrey-800">
      <Image src="/svg/logo-mobile.svg" alt="Logo" width={24} height={25} />
      <Heading size="lg" className="text-black dark:text-white">
        Platform Launch
      </Heading>
    </div>
  );
};
