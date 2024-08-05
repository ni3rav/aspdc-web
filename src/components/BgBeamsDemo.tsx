"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[calc(100vh-4rem)] w-full rounded-md bg-zinc-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10  text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Welcome to ASPDC
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md md:text-sm text-center relative z-10">
          Whether you're just starting out on your coding journey or you're a
          seasoned pro, we welcome you with open arms and look forward to seeing
          all that you'll accomplish as a member of our community.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
