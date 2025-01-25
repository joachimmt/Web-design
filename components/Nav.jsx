"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "ACCUEIL",
    path: "/",
  },
  {
    name: "À PROPOS",
    path: "/services",
  },
  {
    name: "SERVICES",
    path: "/resume",
  },
  {
    name: "CRÉATIONS",
    path: "/work",
  },
  // {
  //   name: "contact",
  //   path: "/contact",
  // },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-bold text-fuchsia-600  text-xl`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
