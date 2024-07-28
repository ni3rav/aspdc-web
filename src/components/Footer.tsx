import React from "react";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const Footer = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center flex-wrap h-32",
        fontSans
      )}
    >
      <div className="flex flex-wrap items-center justify-center h-1/3 w-1/2 text-lg">
        Made with 😻 by Team ASPDC
      </div>
      <div className="flex flex-wrap items-center gap-10 justify-center h-2/3 w-1/2 text-lg">
        <Link href="https://github.com/aspdc">
          <Github size={32} />
        </Link>
        <Link href="https://x.com/aspdc_club">
          <Twitter size={32} />
        </Link>
        <Link href="https://www.linkedin.com/company/adani-student-programming-and-development-club/">
          <Linkedin size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
