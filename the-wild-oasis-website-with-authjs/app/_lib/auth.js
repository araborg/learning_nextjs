// auth.js
// import NextAuth from "next-auth";
// import { authConfig } from "../../auth.config";
// // import Credentials from "next-auth/providers/credentials";

// export const { handlers, auth, signIn, signOut } = NextAuth({
// 	...authConfig,
// 	// providers: [Credentials({})],
// });

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

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
