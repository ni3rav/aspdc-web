import { AdminLogin } from "@/components/AdminLogin"
import {AdminPanel} from "@/components/AdminPanel"
import { verifyAdmin } from "@/lib/admin"

export const dynamic = "force-dynamic"

export default async function Page() {
	try {
		const username = await verifyAdmin()
		if (!username) {
			return <AdminLogin />
		}
		return <AdminPanel username={username} />

	} catch (e) {
		console.error(e)
		return <AdminLogin />
	}
}