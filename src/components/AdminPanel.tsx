import { AdminLogin } from "@/components/AdminLogin";

import { verifyAdmin } from "@/lib/admin";
import { TypographyH1 } from "@/components/ui/typography";
import { CreateEventDialog } from "@/components/CreateEventDialog";

// function CreateEvent() {
// 	return (
// 		<Card className="w-[350px]">
// 			<CardHeader>
// 				<CardTitle>Create event</CardTitle>
// 				<CardDescription>Create a new ASPDC event.</CardDescription>
// 			</CardHeader>
// 			<CardContent>
// 				<form>
// 					<div className="grid w-full items-center gap-4">
// 						<div className="flex flex-col space-y-1.5">
// 							<Label htmlFor="name">Title</Label>
// 							<Input id="name" placeholder="Event Title" />
// 						</div>
// 					</div>
// 				</form>
// 			</CardContent>
// 			<CardFooter className="flex justify-between">
// 				<Button variant="outline">Cancel</Button>
// 				<Button>Create</Button>
// 			</CardFooter>
// 		</Card>
// 	)
// }


export async function AdminPanel() {
	const username = await verifyAdmin()
	if (!username) {
		return <AdminLogin />
	}

	return (
		<div className="m-4 p-2 flex flex-col flex-wrap justify-center">
			<TypographyH1>Welcome, {username}</TypographyH1>
			<CreateEventDialog />
		</div>
	)
}