import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { getGuest } from "./data-service";

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,

			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],

	callbacks: {
		authorized({ auth, request }) {
			console.log(auth);

			return !!auth?.user;
		},

		async signIn({ user, account, profile }) {
			try {
				const existingGuest = await getGuest(user.email);

				return true;
			} catch (error) {
				return false;
			}
		},
	},

	pages: {
		signIn: "/login",
	},

	// callbacks: {
	// 	authorized({ auth, request: { nextUrl } }) {
	// 		const isLoggedIn = !!auth?.user;
	// 		console.log(isLoggedIn);

	// 		const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

	// 		if (isOnDashboard) {
	// 			if (isLoggedIn) return true;
	// 			return false; // Redirect unauthenticated users to login page
	// 		} else if (isLoggedIn) {
	// 			return Response.redirect(new URL("/dashboard", nextUrl));
	// 		}

	// 		return true;
	// 	},
	// },
});
