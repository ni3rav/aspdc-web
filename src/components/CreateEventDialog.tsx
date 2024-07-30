"use client"

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"


import { createEvent } from "@/lib/events"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormState } from "react-dom"
import { TypographyH2 } from "@/components/ui/typography"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, Loader2 } from "lucide-react"
import { Calendar } from "./ui/calendar"


const formSchema = z.object({
	eventID: z.number(),
	title: z.string(),
	location: z.string().min(4, "Location must be atleast 4 characters."),
	date: z.date({ required_error: "A date must be given." }),
	description: z.string(),
	cta_text: z.string().optional(),
	cta_link: z.string().optional(),
	image_link: z.string().optional(),
})

const initialState = {
	error: "",
	message: ""
}


export function CreateEventDialog() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			eventID: 0,
			title: "",
			location: "",
			date: new Date(),
			description: "",
			cta_text: "",
			cta_link: "",
			image_link: "",
		}
	})

	const [state, formAction, pending] = useFormState(createEvent, initialState)
	// todo replace date with datetime

	return (
		<div className="m-4 p-2 ml-0 pl-0">
			<TypographyH2>Create an Event</TypographyH2>

			<Form {...form}>
				<form action={formAction} className="space-y-8 mt-4">
					<FormField
						control={form.control}
						name="eventID"
						render={({ field }) => (
							<FormItem>
								<FormLabel>ID</FormLabel>
								<FormControl>
									<Input type="number" placeholder="Event ID" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="A short title" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="location"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Location</FormLabel>
								<FormControl>
									<Input type="text" placeholder="Online or venue?" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<input type="hidden" name={field.name} value={field.value?.toISOString()} />
								<FormLabel>Date</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={"outline"}
												className={cn(
													"w-[240px] pl-3 text-left font-normal",
													!field.value && "text-muted-foreground"
												)}
											>
												{field.value ? (
													format(field.value, "PPP")
												) : (
													<span>Pick a date</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0" align="start">
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date < new Date("2000-01-01")
											}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<br />
								<FormControl>
									<Textarea placeholder="What's the event about?" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="cta_text"
						render={({ field }) => (
							<FormItem>
								<FormLabel>CTA Text</FormLabel>
								<FormControl>
									<Input placeholder="What should the CTA button say?" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="cta_link"
						render={({ field }) => (
							<FormItem>
								<FormLabel>CTA Link</FormLabel>
								<FormControl>
									<Input placeholder="Where should the button point to?" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="image_link"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Image Link</FormLabel>
								<FormControl>
									<Input placeholder="Link to the event image" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{state.error && <FormMessage className="text-xl">error: {state.error}</FormMessage>}
					{state.message && <FormMessage className="text-xl text-green-400">message: {state.message}</FormMessage>}
					<Button type="submit" disabled={pending}> {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Submit</Button>
				</form>
			</Form>
		</div>
	)
}
