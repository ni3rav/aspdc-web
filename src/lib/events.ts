"use server"

import Event from "@/models/Event"
import dbConnect from "@/lib/db"
import { verifyAdmin } from "@/lib/admin"

export async function createEvent(prevState:any, eventData: FormData) {
	const username = await verifyAdmin()
	if (!username) {
		return {error: "You are not authorized to perform this action.", message: ""}
	}

	try {
		const eventDetails = {
			id: parseInt(eventData.get("eventID")?.toString() || ""),
			title: eventData.get("title")?.toString() || "",
			location: eventData.get("location")?.toString() || "",
			date: eventData.get("date")?.toString(),
			description: eventData.get("description")?.toString(),
			cta_text: eventData.get("cta_text")?.toString() || null,
			cta_link: eventData.get("cta_link")?.toString() || null,
			image_link: eventData.get("image_link")?.toString() || null,
		}
		const notRequired = ["cta_text", "cta_link", "image_link"]
		for (const [key, value] of Object.entries(eventDetails)) {
			if (!value && !notRequired.includes(key)) {
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

export async function deleteEvent(prevState:any, eventData: FormData) {
	const username = await verifyAdmin()
	if (!username) {
		return {error: "You are not authorized to perform this action.", message: ""}
	}

	const eventID = parseInt(eventData.get("eventID")?.toString() || "")
	if (!eventID) {
		return {error: "Event ID is required", message: ""}
	}

	try {
		await dbConnect()
		await Event.deleteOne({id: eventID})
		return {error: "", message: "Event deleted successfully!"}
	} catch (error) {
		console.error(error)
		return {error: "An internal server error occurred!", message: ""}
	}
}