import { json as fetchResJson } from 'fetchres';
import moment from 'moment';

export function fetchJourneyPlan(startLoc, endLoc, startTime) {
	return fetch(`https://api.tfl.gov.uk/journey/journeyresults/${startLoc.lat},${startLoc.lng}/to/${endLoc.lat},${endLoc.lng}?time=${moment(startTime).format('HHmm')}`)
		.then(fetchResJson);
}

export function fetchTubeAndOvergroundFare(startNaptanId, endNaptanId) {
	return fetch(`https://api.tfl.gov.uk/Stoppoint/${startNaptanId}/FareTo/${endNaptanId}`)
		.then(fetchResJson)
		.then(json => parseFloat(json[0].rows[0].ticketsAvailable.find(ticket => ticket.description === 'Pay as you go').cost));
}
