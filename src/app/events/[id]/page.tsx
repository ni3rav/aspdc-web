import { notFound } from "next/navigation";
import dbConnect from "@/lib/db";
import Events, {Events as EventType} from "@/models/Event";

export default async function Page({params}: {params: {id: number}}) {
	await dbConnect();
	const event: EventType | null = await Events.findOne({id: params.id})
	
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