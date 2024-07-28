"use client"

import { TypographyH1 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { CreateEventDialog } from "@/components/CreateEventDialog";
import { DeleteEventDialog } from "@/components/DeleteEventDialog";
import { deauthenticateAdmin } from "@/lib/admin";

export async function AdminPanel({username}: {username: string}) {
	// todo delete event dialog
	return (
		<div className="m-4 p-2 flex flex-col flex-wrap justify-center">
			<div className="flex flex-row items-center justify-between">
				<TypographyH1>Welcome, {username}</TypographyH1>
				<Button className="mt-2" onClick={async () => {
					await deauthenticateAdmin();
				}}> Log Out </Button>
			</div>
			<CreateEventDialog />
			<DeleteEventDialog />
		</div>
	)
}