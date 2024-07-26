"use client";
import React from "react";
import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import Link from "next/link";

type EventCardProps = {
	id: number;
	title: string;
	location: string;
	description?: string;
	date: string;
};

export function EventCard({ id, title, location, date }: EventCardProps) {
	return (
		<div className="flex py-5 px-5 items-center justify-center antialiased">
			<GlowingStarsBackgroundCard>
				<GlowingStarsTitle>{title}</GlowingStarsTitle>
				<div className="flex justify-between items-end">
					<GlowingStarsDescription>
						{location}
						<br />
						{date}
					</GlowingStarsDescription>
					<div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
						{/* todo open a modal using parallel routes here */}
						<Icon navLink={`/events/${id}`} />
					</div>
				</div>
			</GlowingStarsBackgroundCard>
		</div>
	);
}

const Icon = ({ navLink }: { navLink: string }) => {
	return (
		<Link href={navLink} >
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="h-4 w-4 text-white stroke-2 hover:stroke-1"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
				/>
			</svg>
		</Link>
	);
};
