"use client";

import Link from "next/link";
import { Button, ButtonGroup } from "@heroui/react";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-[#9747ff]">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl  whitespace-nowrap text-white font-bold ">
            WebDesigneo
            <span className="font-bold">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav />
          <Link href="/contact">
            <Button
              className="bg-yellow-500 rounded-full px-9 pt-8 pb-8"
              size="md"
            >
              ME CONTACTER
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
