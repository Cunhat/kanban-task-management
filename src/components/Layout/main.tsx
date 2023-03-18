import { NextPage } from "next/types";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Heading } from "../ui/Heading";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/Button";
import { Body } from "../ui/Body";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={`${jakarta.variable} h-full bg-lines-100 font-sans dark:bg-customGrey-900`}
    >
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

const NavBar: React.FC = () => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 dark:bg-customGrey-800">
      <Image src="/svg/logo-mobile.svg" alt="Logo" width={24} height={25} />
      <div className="flex items-center gap-2">
        <Heading size="lg" className="text-black dark:text-white">
          Platform Launch
        </Heading>
        <div className="md:hidden">
          <Image
            src="/svg/icon-chevron-down.svg"
            alt="Logo"
            width={8}
            height={4}
          />
        </div>
      </div>
      <div className="ml-auto flex h-8 w-12 items-center justify-center rounded-3xl bg-primary md:hidden">
        <Image
          src="/svg/icon-add-task-mobile.svg"
          alt="Logo"
          width={12}
          height={12}
        />
      </div>
      <div className="ml-auto hidden rounded-3xl bg-primary md:flex">
        <Button intent="primary" size="lg">
          + Add New Task
        </Button>
      </div>
      <Image
        src="/svg/icon-vertical-ellipsis.svg"
        alt="Logo"
        width={4}
        height={16}
      />
    </div>
  );
};
