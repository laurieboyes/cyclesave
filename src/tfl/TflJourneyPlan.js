import moment from 'moment';
import { json as fetchResJson } from 'fetchres';
import TflJourney from './TflJourney';

export default class TflJourneyPlan {
	constructor (startLatLng, endLatLng, startTime) {
		this.start = startLatLng;
		this.end = endLatLng;
		this.startTime = startTime;
		this.isFetched = false;
	}

	fetchPlan () {
		return fetch(`https://api.tfl.gov.uk/journey/journeyresults/${this.start.lat},${this.start.lng}/to/${this.end.lat},${this.end.lng}?time=${moment(this.startTime).format('HHmm')}`)
			.then(fetchResJson)
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
