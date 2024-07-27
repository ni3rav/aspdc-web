"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authenticateAdmin } from "@/lib/admin"
import { useFormState } from "react-dom"
import { TypographyH1 } from "./ui/typography"

const formSchema = z.object({
	username: z.string().min(4, "Username must be atleast 4 characters.").max(10, "Username must not exceed 10 characters."),
	password: z.string().min(8, "Password must be atleast 8 characters.").max(20, "Password must not exceed 20 characters.")
})

const initialState = {
	error: ""
}

export function AdminLogin() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: ""
		}
	})

	const [state, formAction] = useFormState(authenticateAdmin, initialState)

	return (<div className="p-4 m-4">	
		<TypographyH1> Admin Login </TypographyH1>
		<Form {...form}>
			<form action={formAction} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="admin" {...field} />
							</FormControl>
							<FormDescription>
								This is your admin username (very secret).
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="somecrypticpassword" {...field} />
							</FormControl>
							<FormDescription>
								This is your admin password (also very secret).
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Submit</Button>
			</form>
		</Form>
		<p className="text-red-500 my-2">{state?.error}</p>
	</div>
	)
}