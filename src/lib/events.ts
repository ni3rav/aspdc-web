"use server"

import Event from "@/models/Event"
import dbConnect from "@/lib/db"

export async function createEvent(prevState:any, eventData: FormData) {
	try {
		const eventDetails = {
			id: parseInt(eventData.get("eventID")?.toString() || ""),
			title: eventData.get("title")?.toString() || "",
			location: eventData.get("location")?.toString() || "",
			date: eventData.get("date")?.toString(),
			description: eventData.get("description")?.toString(),
		}
		for (const [key, value] of Object.entries(eventDetails)) {
			if (!value) {
				return {error: `${key} is required`, message: ""}
			}
		}
		await dbConnect()
		const event = new Event(eventDetails)
		await event.save()
		return {error: "", message: "Event created successfully!"}
	} catch (error) {
		console.error(error)
		return {error: "An internal server error occurred!", message: ""}
	}
}