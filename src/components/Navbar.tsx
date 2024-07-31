"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <div className="relative w-full h-[4rem] py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <span>
              <Image width="30" height="30" src="/logo.png" alt="womp womp" />
            </span>
            <span className="font-bold">ASPDC</span>
          </Link>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-white hover:text-gray-500 transition-all ease-in-out duration-50"
                  >
                    {" "}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button className="hidden lg:block">
            <Link href="/login">
              <span className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-gray-500 hover:bg-zinc-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all ease-in-out duration-50">
                LogIn
              </span>
            </Link>
          </button>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-zinc-950 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <Image
                          width="30"
                          height="30"
                          src="/logo.png"
                          alt="womp womp"
                        />
                      </span>
                      <span className="font-bold">ASPDC</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-zinc-600 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-zinc-600"
                        >
                          <span className="ml-3 text-base font-medium text-white">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-gray-500 hover:bg-zinc-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all ease-in-out duration-50"
                  >
                    <Link href="/login">LogIn</Link>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
