import { getCabins } from "@/app/_lib/data-service";

// for caching: component level/individual fetch level
// import { unstable_noStore as noStore } from "next/cache";

import CabinCard from "@/app/_components/CabinCard";

async function CarbinList({ filter }) {
	// noStore();

	const cabins = await getCabins();
	// let cabins = await getCabins();

	// console.log(cabins);
	// cabins = {};

	if (!cabins.length) return null;

	let displayedCabins;

	if (filter === "all") displayedCabins = cabins;

	if (filter === "small")
		displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);

	if (filter === "medium")
		displayedCabins = cabins.filter(
			(cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
		);

	if (filter === "large")
		displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
			{/* {cabins.map((cabin) => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))} */}

			{displayedCabins.map((cabin) => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))}
		</div>
	);
}

export default CarbinList;
