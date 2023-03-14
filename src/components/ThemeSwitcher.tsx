import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = React.useState(false);

  const toggleTheme = () => {
    setEnabled(!enabled);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex h-12 w-full items-center justify-center gap-6 rounded-md bg-customGrey-100 dark:bg-customGrey-900">
      <Image
        src="/svg/icon-light-theme.svg"
        alt="Logo"
        width={18}
        height={18}
      />
      <Switch
        checked={enabled}
        onChange={toggleTheme}
        className={`${"bg-primary"} relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>

      <Image src="/svg/icon-dark-theme.svg" alt="Logo" width={18} height={18} />
    </div>
  );
};
