import { NextPage } from "next/types";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Heading } from "../ui/Heading";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "../ui/Button";
import { Body } from "../ui/Body";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { ThemeProvider } from "next-themes";
import React from "react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ThemeProvider storageKey="preferred-theme" attribute="class">
      <div
        className={`${
          jakarta.variable
        } grid min-h-screen bg-customGrey-100 font-sans dark:bg-customGrey-900 ${
          isOpen ? "md:grid-cols-[261px_auto]" : "md:grid-cols-1"
        } `}
      >
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex h-full flex-col ">
          <NavBar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

const SideBar: React.FC<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  if (!isOpen)
    return (
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="absolute bottom-8  z-10 flex h-12 w-14 items-center rounded-r-3xl bg-primary pl-[18px] hover:cursor-pointer"
      >
        <Image
          src="/svg/icon-show-sidebar.svg"
          alt="Logo"
          width={16}
          height={12}
        />
      </div>
    );

  return (
    <div className="hidden h-full flex-col gap-14 border border-lines-100 bg-white py-8 dark:border-lines-900 dark:bg-customGrey-800 md:flex">
      <Image
        src="/svg/logo-dark.svg"
        alt="Logo"
        width={152}
        height={25}
        className="pl-6 dark:hidden"
      />
      <Image
        src="/svg/logo-light.svg"
        alt="Logo"
        width={152}
        height={25}
        className="hidden pl-6 dark:block"
      />
      <div className="mt-auto flex flex-col gap-4 px-3">
        <ThemeSwitcher />
        <div
          className="flex h-12 items-center gap-[10px] pl-[10px] hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/svg/icon-hide-sidebar.svg"
            alt="Logo"
            width={18}
            height={16}
          />
          <Heading size="md" className="text-customGrey-500">
            Hide Sidebar
          </Heading>
        </div>
      </div>
    </div>
  );
};

const NavBar: React.FC = () => {
  return (
    <div className="flex items-center gap-4 border border-lines-100 bg-white p-4 dark:border-lines-900 dark:bg-customGrey-800">
      <Image
        src="/svg/logo-mobile.svg"
        alt="Logo"
        width={24}
        height={25}
        className="md:hidden"
      />
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
