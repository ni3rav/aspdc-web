import { AdminLogin } from "@/components/AdminLogin";
import { cookies } from "next/headers";

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { decrypt } from "@/lib/crypt";

function CreateEvent() {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Create event</CardTitle>
				<CardDescription>Create a new ASPDC event.</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Title</Label>
							<Input id="name" placeholder="Event Title" />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Create</Button>
			</CardFooter>
		</Card>
	)
}


export function AdminPanel() {
	const adminSession = cookies().get("admin")
	if (!adminSession) {
		return <AdminLogin />
	}

	const { username } = JSON.parse(decrypt(adminSession.value))
	
	return <p>welcome {username}</p>
}