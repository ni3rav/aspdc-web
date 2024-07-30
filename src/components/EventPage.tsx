import { Events as EventType } from "@/models/Event"
import Link from "next/link"

export async function EventPage({ event }: { event: EventType }) {
	return (
		<div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-600 to-green-800 text-white">
			<header className="py-6 px-4 sm:px-6 lg:px-8">
				<h1 className="text-5xl font-bold text-center">{event.title}</h1>
			</header>

			<main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{event.image_link && (
					<section className="mb-12">
						<img src={event.image_link} alt={`poster for ${event.title}`} className="object-cover rounded-lg" />
					</section>
				)}

				<section className="mb-12">
					<h2 className="text-3xl font-semibold mb-4">About the Event</h2>
					<p className="text-lg">
						{event.description}
					</p>
				</section>

				<section className="mb-12">
					<h2 className="text-3xl font-semibold mb-4">Key Details</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-white bg-opacity-20 p-6 rounded-lg">
							<h3 className="text-xl font-semibold mb-2">Date & Time</h3>
							<p>{event.date}</p>
							{/* <p>9:00 AM - 6:00 PM daily</p> */}
						</div>
						<div className="bg-white bg-opacity-20 p-6 rounded-lg">
							<h3 className="text-xl font-semibold mb-2">Location</h3>
							<p>{event.location}</p>
							{/* <p>123 Innovation Blvd, San Francisco, CA 94105</p> */}
						</div>
					</div>
				</section>

				{
					event.cta_text && event.cta_link && (
						<section>
							<h2 className="text-3xl font-semibold mb-4">What's next?</h2>
							<Link href={event.cta_link}>
								<button className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded transition duration-300" role="link">
									{event.cta_text}
								</button>
							</Link>
						</section>
					)
				}
			</main>

		</div>
	)
}

