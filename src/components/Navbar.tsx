"use client";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <section className="w-full h-16 flex items-center justify-center bg">
      <div className="flex h-[84%] w-[99%] items-center justify-between px-4 md:px-6 rounded-lg bg-zinc-900">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-zinc-600"
          prefetch={false}
        >
          {/* <MountainIcon className="h-6 w-6 text-zinc-300 hover:text-zinc-600" /> */}
          <div className="h-6 w-6">
            <Image src="/logo.png" alt="womp womp" height={100} width={100} />
          </div>
          <span className="text-2xl font-bold text-zinc-300 hover:text-zinc-600">
            ASPDC
          </span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="/events"
            className="text-lg font-bold transition-colors text-zinc-300 hover:text-zinc-600 hover:text-primary mr-4"
            prefetch={false}
          >
            Events
          </Link>
          <Link
            href="/leaderboard"
            className="text-lg font-bold transition-colors text-zinc-300 hover:text-zinc-600 hover:text-primary"
            prefetch={false}
          >
            Leaderboard
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6 text-zinc-300 hover:text-zinc-600" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[200px] bg-zinc-900">
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="text-lg font-bold transition-colors text-zinc-300 hover:text-zinc-600 hover:text-primary"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-lg font-bold transition-colors text-zinc-300 hover:text-zinc-600 hover:text-primary"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
