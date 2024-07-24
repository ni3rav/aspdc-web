"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(1)
  const handleClick = () => setCount(prev => prev + 1)
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-dvh bg-zinc-950 text-white">
      <h1>ASPDC * {count}</h1>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
}
