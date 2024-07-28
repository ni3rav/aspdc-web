import { EventsTab } from "@/components/EventsTab";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Events",
	description: "A list of all the events that are happening in the community.",
	keywords: ["events", "community", "aspdc"],
};

export default function Page() {
	return <EventsTab />;
}