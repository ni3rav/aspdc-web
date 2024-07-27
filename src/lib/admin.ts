"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { encrypt } from "@/lib/crypt"

export async function authenticateAdmin(prevState: any, data: FormData) {
	const username = data.get("username")
	const password = data.get("password")

	if (!username || !password) {
		return {
			error: "username and password not present"
		}
	}

	if (username === process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD) {
		cookies().set("admin", encrypt(JSON.stringify({
			username: username,
			password: password,
		})), {
			maxAge: 60 * 30, // half an hour
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
		})
		revalidatePath("/admin")
		return {"error": ""}
	} else {
		return {
			error: "cannot authenticate admin"
		}
	}
}