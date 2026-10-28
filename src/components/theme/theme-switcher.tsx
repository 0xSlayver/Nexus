"use client";

import { Button } from "@/components/ui/button";
import { LucideSun, LucideMoon } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <LucideSun className="size-4 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />

      <LucideMoon className="absolute size-4 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeSwitcher;
