import React from "react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: "Twitter",
      href: "https://x.com/aspdc_club",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/adani-student-programming-and-development-club/ ",
    },
    {
      title: "Github",
      href: "https://github.com/aspdc",
    },
    {
      title: "Youtube",
      href: "https://www.youtube.com/@clubaspd",
    },
  ];

  return (
    <section className="m-4 rounded-lg shadow bg-zinc-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-zinc-300 font-bold">
          Made with 😻 by Team ASPDC
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-md font-medium sm:mt-0 text-zinc-300">
          {footerLinks.map((item) => {
            return (
              <li key={item.title}>
                <Link href={item.href} className="me-4 hover:text-zinc-600 md:me-6 transition-all ease-in-out duration-100">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
