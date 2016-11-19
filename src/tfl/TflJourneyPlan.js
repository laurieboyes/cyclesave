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
				console.log('this.journeys A', this.journeys);
			})
			.catch(err => {
				console.error(err);
				this.isFetched = true;
				this.inError = true;
			})
	}

	fetchCosts () {
		if(this.inError) {
			return [];
		} else {
			return Promise.all(this.journeys.map(j => j.fetchCost()));
		}
	}

	getJourneys() {
		if(this.inError) {
			return [];
		} else {
			return this.journeys;
		}
	}
}
