import { auth } from "@/app/_lib/auth";
const middleware = auth;

export const config = {
	matcher: ["/account"],
};
