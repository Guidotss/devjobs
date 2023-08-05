"use client";
import { ThemeProvider } from "next-themes";
import { FC, useEffect, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: FC<ProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return <ThemeProvider>{children}</ThemeProvider>;
};
