import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Leaderboard = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center p-2 overflow-y-scroll">
      <Table>
        <TableCaption>
          These rankings are based on contests conducted in ASPDC's Codeforces
          group.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ranking</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* this the part where we'll map over the data recieved by the API */}
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          {/* <--------------------fin----------------------> */}
        </TableBody>
      </Table>
    </div>
  );
};

export default Leaderboard;
