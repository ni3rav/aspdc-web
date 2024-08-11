import Leaderboard from "@/components/Leaderboard";
import { Metadata } from "next";
import { fetchLeaderboard } from "@/lib/fetchLeaderboard";

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Leaderboard",
  description:
    "Ranking based on the contests conducted on codeforces by ASPDC.",
  keywords: ["leaderboard", "leaderboard", "community", "contests"],
};

export default async function page() {
  const users = await fetchLeaderboard();

  return <Leaderboard users={users} />;
}
