// Creating an API endpt with Route Handlers

import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
	// http://localhost:3000/api/cabins/100
	// return Response.json({ test: "test" });

	// console.log(request);
	// console.log(params);

	const { cabinId } = params;

	try {
		const [cabin, bookedDates] = await Promise.all([
			getCabin(cabinId),

			getBookedDatesByCabinId(cabinId),
		]);

		return Response.json({ cabin, bookedDates });
	} catch {
		return Response.json({ message: "Cabin not found" });
	}
}

// export async function POST(){}

// export async function DELETE(){}
