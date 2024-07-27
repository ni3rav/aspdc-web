"use client"

import { deauthenticateAdmin } from "@/lib/admin";
import { TypographyH1 } from "@/components/ui/typography";
import { CreateEventDialog } from "@/components/CreateEventDialog";
import { Button } from "@/components/ui/button";

export async function AdminPanel({username}: {username: string}) {
	return (
		<div className="m-4 p-2 flex flex-col flex-wrap justify-center">
			<div className="flex flex-row items-center justify-between">
				<TypographyH1>Welcome, {username}</TypographyH1>
				<Button className="mt-2" onClick={async () => {
					await deauthenticateAdmin();
				}}> Log Out </Button>
			</div>
			<CreateEventDialog />
		</div>
	)
}