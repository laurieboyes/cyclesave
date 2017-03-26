import { json as fetchResJson } from 'fetchres';
import moment from 'moment';
import flags from '../dev-stuff/flags';

export function fetchJourneyPlan(startLoc, endLoc, startTime) {
	return fetch(`https://api.tfl.gov.uk/journey/journeyresults/${startLoc.lat},${startLoc.lng}/to/${endLoc.lat},${endLoc.lng}?time=${moment(startTime).format('HHmm')}`)
		.then(fetchResJson);
}

// Todo throttle this fetch? Yeah I think so. If this has probs we can throttle here and also higher.
export function fetchTubeAndOvergroundFare(startNaptanId, endNaptanId) {

	if(flags.fakeTflTubeAndOvergroundFare) {
		console.log('faking TFL tube/overground fare');
		return Promise.resolve(2.40);
	}

	return fetch(`https://api.tfl.gov.uk/Stoppoint/${startNaptanId}/FareTo/${endNaptanId}`)
		.then(fetchResJson)
		.then(json => parseFloat(json[0].rows[0].ticketsAvailable.find(ticket => ticket.description === 'Pay as you go').cost));
}
