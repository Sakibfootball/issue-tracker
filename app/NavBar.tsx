"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiOutlineBugAnt } from "react-icons/hi2";
import classNames from "classnames";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-5 border-b mb-5 px-4 h-12 items-center">
      <Link href="/">
        <HiOutlineBugAnt size="2em" color="orange" />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
                "text-orange-600": currentPath === link.href,
                "text-slate-500": currentPath !== link.href,
                "hover:text-orange-500 transition-colors": true,
                
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        {/* {`${
              link.href === currentPath ? "text-orange-600" : "text-slate-500"
            } text-slate-500 hover:text-orange-400 transition-colors`} */}
      </ul>
    </nav>
  );
};

export default NavBar;
 