"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

// not ds router
// import { useRouter } from "next/router";

function Filter() {
	// not ds way
	// const [searchParams] = useSearchParams();

	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const activeFilter = searchParams.get("capacity");
	// console.log(activeFilter); // all, small, medium, large

	function handleFilter(filter) {
		// console.log(filter);

		const params = new URLSearchParams(searchParams);

		params.set("capacity", filter);

		router.replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="border border-primary-800 flex">
			<Button
				filter="all"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				All cabins
			</Button>

			<Button
				filter="small"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				1 &mdash; 3 guests
			</Button>

			<Button
				filter="medium"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				4 &mdash; 7 guests
			</Button>

			<Button
				filter="large"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				8 &mdash; 12 guests
			</Button>

			{/* old format */}
			{/* <button
				className="px-5 py-2 hover:bg-primary-700"
				onClick={() => handleFilter("large")}
			>
				8 &mdash; 12 guests
			</button> */}

			{/* new format */}
			{/* <Button
				filter="large"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				8 &mdash; 12 guests
			</Button> */}
		</div>
	);
}

function Button({ filter, handleFilter, activeFilter, children }) {
	return (
		<button
			// className="px-5 py-2 hover:bg-primary-700"
			className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`}
			onClick={() => handleFilter(filter)}
		>
			{children}
		</button>
	);
}

export default Filter;
