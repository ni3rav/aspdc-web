import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-red-300 flex flex-row items-center justify-center flex-wrap h-24">
      <div className="flex flex-wrap items-center justify-center h-1/3 w-1/2 text-lg">
        Made with 😻 by Team ASPDC
      </div>
      <div className="flex flex-wrap items-center gap-10 justify-center h-2/3 w-1/2 text-lg">
        <Link href="https://github.com/aspdc">
          <Github size={28} />
        </Link>
        <Link href="https://x.com/aspdc_club">
          <Twitter size={28} />
        </Link>
        <Link href="https://www.linkedin.com/company/adani-student-programming-and-development-club/">
          <Linkedin size={28} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
