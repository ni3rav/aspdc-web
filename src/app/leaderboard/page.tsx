import Leaderboard from "@/components/Leaderboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard",
  description:
    "Ranking based on the contests conducted on codeforces by ASPDC.",
  keywords: ["leaderboard", "leaderboard", "community", "contests"],
};

export default function page() {
  return <Leaderboard />;
}
