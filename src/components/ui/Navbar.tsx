"use client"
import { useState } from 'react';
import { Logo } from ".";
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navbar = () => {
    const [theme, setTheme]  = useState(true); 
  return (
    <div className="w-full flex justify-between items-center p-3">
      <Logo />
      <ThemeSwitcher />
    </div>
  );
};
