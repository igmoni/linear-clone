"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={switchTheme}
      className="relative flex size-9 items-center justify-center relative"
      aria-label="Toggle theme"
    >
      <SunIcon
        size={16}
        className="absolute inset-0 scale-100 rotate-0 transition-all duration-200 dark:scale-0 dark:rotate-90"
      />
      <MoonIcon
        size={16}
        className="absolute inset-0 scale-0 rotate-90 transition-all duration-200 dark:scale-100 dark:rotate-0"
      />
    </button>
  );
};

export { ModeToggle };
