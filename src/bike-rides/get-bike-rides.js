import flags from '../dev-stuff/flags';
import fakeBikeRides from '../dev-stuff/fixtures/bike-rides';

import fuzzyFindIndex from '../util/number-array-fuzzy-find-index';
import dataSources from '../google-stuff/data-sources';
import { queryFitnessDataSource } from '../google-stuff/queries'

function getClosestLatLng (locationPoints, nanos) {
	const sortedPoints = locationPoints.sort();
	const closestLocation = sortedPoints[fuzzyFindIndex(sortedPoints.map(l => l.startTimeNanos), nanos)];
	return {
		lat: +closestLocation.value[0].fpVal,
		lng: +closestLocation.value[1].fpVal
	};
}

export default (fromDate, toDate) => {

	if(flags.fakeGoogleStuff) {
		console.log('faking bike rides');
		return Promise.resolve(fakeBikeRides);
	}

	return Promise.all([
		dataSources.activitySegments,
		dataSources.locationSamples
	].map(d => queryFitnessDataSource(d, fromDate, toDate)))
		.then(([activities, locationPoints]) => {

			if(!activities) {
				throw new Error('No activities found in the given range');
			}

			return activities

				//point is an array of activity segments
				.filter(a => a.value[0].intVal === 1)

				.map(b => {

					const startTime = new Date(b.startTimeNanos / 1000000);
					const endTime = new Date(b.endTimeNanos / 1000000);

					const durationMs = (b.endTimeNanos - b.startTimeNanos) / 1000000;

					const startLatLang = getClosestLatLng(locationPoints, b.startTimeNanos);
					const endLatLang = getClosestLatLng(locationPoints, b.endTimeNanos);

					return {
						startTime,
						endTime,
						startLatLang,
						endLatLang,
						durationMs
					};
				});
		})
}
