import { fetchJourneyPlan } from './tfl-client'
import TflJourney from './TflJourney';

export default class TflJourneyPlan {
	constructor (startLatLng, endLatLng, startTime) {
		this.start = startLatLng;
		this.end = endLatLng;
		this.startTime = startTime;
		this.isFetched = false;
	}

	fetchPlan () {
		return fetchJourneyPlan(this.start, this.end, this.startTime)
			.then(stuff => {
				this.isFetched = true;
				this.rawJourneys = stuff.journeys;
				this.journeys = stuff.journeys.map(rawJourney => new TflJourney(rawJourney));
			})
			.catch(err => {
				console.error(err);
				this.isFetched = true;
				this.inError = true;
			})
	}

	fetchCosts () {

	}

	getLegSummaries () {
		if(this.inError) {
			return [];
		} else {
			return this.rawJourneys[0].legs.map(leg => leg.instruction.summary);
		}
	}

	getJourneyLegs () {
		if(this.inError) {
			return [];
		} else {
			return this.journeys.map(j => j.legs);
		}
	}
}
