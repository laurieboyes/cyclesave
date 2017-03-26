import { fetchJourneyPlan } from '../api-clients/tfl-client'
import flags from '../dev-stuff/flags';
import fakePlan from '../dev-stuff/fixtures/tfl-journey-plan';

import TflJourney from './TflJourney';

export default class TflJourneyPlan {
	constructor (startLatLng, endLatLng, startTime) {
		this.start = startLatLng;
		this.end = endLatLng;
		this.startTime = startTime;
		this.isFetched = false;
	}

	makePlanRequest () {
		if(flags.fakeTflJourneyPlan) {
			console.log('faking TFL journey plans');
			return Promise.resolve(fakePlan);
		} else {
			return fetchJourneyPlan(this.start, this.end, this.startTime)
		}
	}

	fetchPlan () {
		return this.makePlanRequest()
			.then(stuff => {
				this.isFetched = true;
				this.rawJourneys = stuff.journeys;
				this.journeys = stuff.journeys.map(rawJourney => new TflJourney(rawJourney));

				// todo can we here filter out the unlikely journeys?
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
			// fetch costs for all possible journeys
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
	
	getAssumedJourney() {
		//todo balance of cost and convenience??
		return this.journeys[0];
	}
}
