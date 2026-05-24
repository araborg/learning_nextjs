"use server";

import { signIn, signOut } from "./auth";

// ds update d profile
export async function updateGuest(formData) {
	// console.log("Server action");

	console.log(formData);
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
