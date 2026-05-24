"use server";

import { auth, signIn, signOut } from "./auth";

// ds update d profile (backend)
export async function updateGuest(formData) {
	// console.log("Server action");

	// console.log(formData);

	const session = await auth();

	if (!session) throw new Error("You must be logged in");

	const nationalID = formData.get("nationalID");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	if (/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
		throw new Error("Please provide a valid national ID");
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
