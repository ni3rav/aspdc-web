import { notFound } from "next/navigation";
import dbConnect from "@/lib/db";
import Events, { Events as EventType } from "@/models/Event";
import { EventPage } from "@/components/EventPage";

import { cache } from 'react'
import { Metadata, ResolvingMetadata } from "next";

const getEvent = cache(async (id: number) => {
	try {
		await dbConnect()
		const item = await Events.findOne({ id: id })
		return item
	} catch (error) {
		console.error(error)
		return null
	}
})

export async function generateMetadata(
	{ params }: { params: { id: number } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	try {
		// read route params
		const id = params.id
	
		// fetch data
		const event = await getEvent(id)
		if (!event) {
			return { title: 'Event not found', description: 'This event does not exist' }
		}
	
		return {
			title: `${event.title} | Events`,
			description: event.description,
		}
	} catch (error) {
		console.error(error)
		return { title: 'Event not found', description: 'This event does not exist' }
	}
}

export default async function Page({ params }: { params: { id: number } }) {
	await dbConnect();
	const event: EventType | null = await getEvent(params.id);

	if (!event) {
		return notFound();
	}

	event.date = new Date(event.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})

	return (
		<EventPage event={event} />
	)
}