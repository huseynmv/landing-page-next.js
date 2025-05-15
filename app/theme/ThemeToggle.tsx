"use client";

import { useTheme } from "next-themes";
import dark from "../../public/icons/dark_mode.svg";
import light from "../../public/icons/light_mode.svg";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      <Image
        src={theme === "dark" ? light : dark}
        alt="Theme icon"
        width={53}
        height={30}
      />
    </button>
  );
}
