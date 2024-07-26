import { Button } from "@/components/ui/button"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"

import { EventCard } from "@/components/EventCard"

const dummyEventsData = {
	upcoming: [
		{
			id: 3,
			title: "Upcoming Event 1",
			date: "2023-01-01",
			location: "Online",
			description: "This is a description of the event",
		},
		{
			id: 4,
			title: "Upcoming Event 2",
			date: "2023-01-02",
			location: "Online on codeforces.com, yes fr",
			description: "This is a description of the event",
		},
	],
	past: [
		{
			id: 1,
			title: "Past Event 1",
			date: "2022-01-01",
			location: "Online",
			description: "This is a description of the event",
		},
		{
			id: 2,
			title: "Past Event 2",
			date: "2022-01-02",
			location: "Online",
			description: "This is a description of the event",
		},
	],
}

export function EventsTab() {
	return (
		<Tabs defaultValue="upcoming" className="w-full">

			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
				<TabsTrigger value="past">Past Events</TabsTrigger>
			</TabsList>

			<TabsContent value="upcoming">
				<div className="flex flex-row flex-wrap w-full">
					{dummyEventsData.upcoming.map((event, index) => (
						<EventCard
							key={index}
							id={event.id}
							title={event.title}
							location={event.location}
							date={event.date}
						/>
					))}
				</div>
			</TabsContent>

			<TabsContent value="past">
				<div className="flex flex-row flex-wrap w-full">
					{dummyEventsData.past.map((event, index) => (
						<EventCard
							key={index}
							id={event.id}
							title={event.title}
							location={event.location}
							date={event.date}
						/>
					))}
				</div>
			</TabsContent>

		</Tabs>
	)
}
