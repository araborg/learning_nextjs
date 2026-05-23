// import Counter from "../_components/Counters";

import { Suspense } from "react";

import CarbinList from "@/app/_components/CarbinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// import { getCabins } from "../_lib/data-service";
// import CabinCard from "@/app/_components/CabinCard";

// for caching: route level
// export const revalidate = 0;
// export const revalidate = 3600; // revalidate after 1 hour

export const metadata = {
	title: "Cabins",
};

// export default async function page() {
// export default function page() {
// 	// fetching data
// 	// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// 	// const data = await res.json();

// 	// console.log(data);

// 	return (
// 		<div>
// 			<h1>Cabins page</h1>

// 			{/* <ul>
// 				{data.map((user) => (
// 					<li key={user.id}>{user.name}</li>
// 				))}
// 			</ul>

// 			<Counter users={data} /> */}
// 		</div>
// 	);
// }

export default function Page({ searchParams }) {
	// console.log(searchParams);

	const filter = searchParams?.capacity ?? "all";

	return (
		<div>
			<h1 className="text-4xl mb-5 text-accent-400 font-medium">
				Our Luxury Cabins
			</h1>

			<p className="text-primary-200 text-lg mb-10">
				Cozy yet luxurious cabins, located right in the heart of the
				Italian Dolomites. Imagine waking up to beautiful mountain
				views, spending your days exploring the dark forests around, or
				just relaxing in your private hot tub under the stars. Enjoy
				nature's beauty in your own little home away from home. The
				perfect spot for a peaceful, calm vacation. Welcome to paradise.
			</p>

			<div className="flex justify-end mb-8">
				<Filter />
			</div>

			{/* {cabins.length > 0 && <CarbinList />} */}

			{/* Suspense */}
			<Suspense fallback={<Spinner />} key={filter}>
				<CarbinList filter={filter} />

				<ReservationReminder />
			</Suspense>
		</div>
	);
}
