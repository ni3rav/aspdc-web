"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { decrypt, encrypt, hash } from "@/lib/crypt"

if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
	throw new Error("ADMIN_USERNAME or ADMIN_PASSWORD is not defined in the environment variables")
}

type AdminCookie = {
	username: string
	password: string
}

export async function deauthenticateAdmin(prevState: any) {
	cookies().delete("admin")
	revalidatePath("/admin")
}

export async function verifyAdmin(): Promise<string | null> {
	const adminCookie = cookies().get("admin")
	if (!adminCookie) {
		return null
	}

	const { username, password }: AdminCookie = JSON.parse(decrypt(adminCookie.value))
	if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
		return username
	} else {
		return null
	}
}

export async function authenticateAdmin(prevState: any, data: FormData) {
	const username = data.get("username")?.toString()
	const password = data.get("password")?.toString()

	if (!username || !password) {
		return {
			error: "username and password not present"
		}
	}

	const hashedPassword = hash(password)

	if (username === process.env.ADMIN_USERNAME && hashedPassword === process.env.ADMIN_PASSWORD!) {
		cookies().set("admin", encrypt(JSON.stringify({
			username: username,
			password: hashedPassword,
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