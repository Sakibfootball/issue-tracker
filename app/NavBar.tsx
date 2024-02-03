import Link from "next/link";
import React from "react";
import { HiOutlineBugAnt } from "react-icons/hi2";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-5 border-b mb-5 px-4 h-12 items-center">
      <Link href="/">
        <HiOutlineBugAnt size="2em" color="purple" />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            className="text-slate-500 hover:text-purple-900 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
