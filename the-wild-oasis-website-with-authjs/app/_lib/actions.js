"use server";

import { revalidatePath } from "next/cache";

import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

// ds update d profile (backend)
export async function updateGuest(formData) {
	// console.log("Server action");
	// console.log(formData);

	const session = await auth();

	if (!session) throw new Error("You must be logged in");

	const nationalID = formData.get("nationalID");

	const [nationality, countryFlag] = formData.get("nationality").split("%");
	// console.log(nationality, countryFlag);

	if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
		throw new Error("Please provide a valid national ID");

	const updateData = { nationality, countryFlag, nationalID };

	// console.log(updateData);

	const { data, error } = await supabase
		.from("guests")
		.update(updateData)
		.eq("id", session.user.guestId);
	// .select()
	// .single();

	if (error) throw new Error("Guest could not be updated");

	// helps refreshes d cache
	revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
	const session = await auth();

	if (!session) throw new Error("You must be logged in");

	const { data, error } = await supabase
		.from("bookings")
		.delete()
		.eq("id", bookingId);

	if (error) {
		throw new Error("Booking could not be deleted");
	}
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
