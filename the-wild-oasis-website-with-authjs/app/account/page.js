import { auth } from "../_lib/auth";

export const metadata = {
	title: "Guest area",
	// description: "Luxury Home From Home",
};

export default async function page() {
	const session = await auth();
	// console.log(session);

	const firstName = session.user.name.split(" ").at(0);

	const firtLetter = firstName.split("")[0].toUpperCase();
	const remainingLetters = firstName.split("").splice(1).join("");

	const transformedName = firtLetter + remainingLetters;

	return (
		<h2 className="font-semibold text-2xl text-accent-400 mb-7">
			Welcome, {transformedName}
		</h2>
	);
}
