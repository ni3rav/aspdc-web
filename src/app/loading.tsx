import { TypographyH1 } from "@/components/ui/typography";
import { Loader2 } from "lucide-react";

export default function Loading() {
	return (
		<div className="flex flex-row items-center justify-center h-screen">
			<Loader2 size="52" className="m-4 p-2 animate-spin" />
			<TypographyH1>Loading... </TypographyH1>
		</div>
	)
}