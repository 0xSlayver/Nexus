"use client";

import { ThemeProvider as BaseThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : { type: "application/json" as const };

  return (
    <BaseThemeProvider {...props} scriptProps={scriptProps}>
      {children}
    </BaseThemeProvider>
  );
}

export default ThemeProvider;
