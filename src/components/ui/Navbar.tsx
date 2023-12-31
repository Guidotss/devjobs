
import { Logo } from ".";
import { ThemeSwitcher } from './ThemeSwitcher';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-3 md:px-16 md:py-10 absolute">
      <Link href={"/"}>
        <Logo />
      </Link>
      <ThemeSwitcher />
    </div>
  );
};
