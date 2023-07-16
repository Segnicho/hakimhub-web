import Image from "next/image";
import { HiMenu } from "react-icons/hi";

import { header } from "@/public";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { navItems } from "@/data/layout";
const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("/");
  const setActiveAndToggle = (current: string) => {
    setActive(current);
    setToggle(!toggle);
  };

  return (
    <nav className="sticky flex top-0 items-center font-poppins h-full justify-between px-5 z-50 bg-white py-2 shadow-sm">
      <Link href="/" className="flex items-center justify-center h-full gap-1">
        <div className="flex items-center justify-center h-full">
          <Image src={header} alt="Hakimhub's logo" className="scale-75" />
        </div>
      </Link>
      <div className="flex font-medium text-xl mr-10">
        <div className="hidden md:flex gap-9">
          {navItems.map((navItem, index) => (
            <Link
              href={navItem.href}
              key={index}
              onClick={() => setActive(navItem.href)}
              className={clsx(
                "font-semibold pt-2",
                active === navItem.href ? " text-primary" : "text-tertiary-text"
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className="md:hidden flex flex-col "
        onClick={() => setToggle(!toggle)}
      >
        <HiMenu className="w-7 h-7 cursor-pointer text-primary" />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } flex-col gap-4 p-6 black-gradient absolute top-12 right-2 mx-4 my-2 min-w-[140px] rounded-xl
          z-50 bg-gray-100 bg-opacity-100
          `}
        >
          {navItems.map((navItem, index) => (
            <Link
              href={navItem.href}
              key={index}
              className={clsx(
                "font-semibold",
                active === navItem.href ? "text-primary" : "text-tertiary-text"
              )}
              onClick={() => setActiveAndToggle(navItem.href)}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
