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


import { deleteEvent } from "@/lib/events"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormState } from "react-dom"
import { TypographyH2 } from "@/components/ui/typography"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
	eventID: z.number(),
})

const initialState = {
	error: "",
	message: ""
}


export function DeleteEventDialog() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			eventID: 0,
		}
	})

	const [state, formAction, pending] = useFormState(deleteEvent, initialState)

	return (
		<div className="m-4 p-2 ml-0 pl-0">
			<TypographyH2>Delete an Event</TypographyH2>

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

					{state.error && <FormMessage className="text-xl">error: {state.error}</FormMessage>}
					{state.message && <FormMessage className="text-xl text-green-400">message: {state.message}</FormMessage>}
					<Button type="submit" disabled={pending}> {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Submit</Button>
				</form>
			</Form>
		</div>
	)
}
