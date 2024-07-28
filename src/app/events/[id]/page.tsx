import { notFound } from "next/navigation";
import dbConnect from "@/lib/db";
import Events, {Events as EventType} from "@/models/Event";

import { cache } from 'react'
import { Metadata, ResolvingMetadata } from "next";

export const getEvent = cache(async (id: number) => {
	await dbConnect()
	const item = await Events.findOne({id: id})
	return item
})

export async function generateMetadata(
	{ params}: {params: {id: number}},
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id

	// fetch data
	const event = await getEvent(id)
	if (!event) {
		return {title: 'Event not found', description: 'This event does not exist'}
	} 

	return {
		title: `${event.title} | Events`,
		description: event.description,
	}
}

// todo maybe add images for the event

export default async function Page({params}: {params: {id: number}}) {
	await dbConnect();
	const event: EventType | null = await getEvent(params.id);
	
	if (!event) {
		return notFound();
	}

	// todo create a component to show the event details
	return (
		<div>
			<h1>{event.title}</h1>
			<p>{event.description}</p>
			<p>{event.location}</p>
			<p>{event.date}</p>
		</div>
	)
}