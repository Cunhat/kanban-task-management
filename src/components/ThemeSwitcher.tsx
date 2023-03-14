import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex h-12 w-full items-center justify-center gap-6 rounded-md bg-customGrey-100 dark:bg-customGrey-900">
      <Image
        src="/svg/icon-light-theme.svg"
        alt="Logo"
        width={18}
        height={18}
      />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <Image src="/svg/icon-dark-theme.svg" alt="Logo" width={18} height={18} />
    </div>
  );
};
