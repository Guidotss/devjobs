"use client"
import { useState } from 'react';
import { Logo } from ".";
import { ThemeSwitcher } from './ThemeSwitcher';
import Link from 'next/link';

export const Navbar = () => {
    const [theme, setTheme]  = useState(true); 
  return (
    <div className="w-full flex justify-between items-center p-3">
      <Link href={"/"}>
        <Logo />
      </Link>
      <ThemeSwitcher />
    </div>
  );
};
