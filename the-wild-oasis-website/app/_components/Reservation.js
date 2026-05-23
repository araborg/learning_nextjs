import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";

async function Reservation({ cabin }) {
	// bcos settings & bookingDates r all promises,
	// one will have to resolve bf d other hence let's use
	// Promise.all()

	// const settings = await getSettings();
	// const bookingDates = await getBookedDatesByCabinId(cabin.id);

	const [settings, bookedDates] = await Promise.all([
		getSettings(),
		getBookedDatesByCabinId(cabin.id),
	]);
	return (
		<div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
			<DateSelector
				bookedDates={bookedDates}
				settings={settings}
				cabin={cabin}
			/>

			<ReservationForm cabin={cabin} />
		</div>
	);
}

export default Reservation;
