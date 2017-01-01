import { fetchTubeAndOvergroundFare } from '../api-clients/tfl-client'
import { getStationCodeFromLatLng } from '../api-clients/transport-api-client'
import { fetchNationalRailFare } from '../api-clients/br-fares-client'
import deepCopy from '../util/deep-copy'

function getLegCost (leg) {
	switch (leg.type) {
		case 'tube':
		case 'overground':
			return fetchTubeAndOvergroundFare(leg.fromNaptanId, leg.toNaptanId);
		case 'national-rail':
			return Promise.all([
				getStationCodeFromLatLng(leg.fromLat, leg.fromLng),
				getStationCodeFromLatLng(leg.toLat, leg.toLng),
			]).then(([fromCode, toCode]) => fetchNationalRailFare(fromCode, toCode));
		case 'bus':
			return Promise.resolve(1.5);
		case 'walking':
			return Promise.resolve(0);
		default:
			return Promise.reject(new Error('Cannot cost leg ' + JSON.stringify(leg)));
	}
}

function getTotalCost (legs) {
	return Promise.all(legs.map(leg => getLegCost(leg)))
		.then(legCosts => legCosts.reduce((total, cost) => total + cost, 0));
}

function mergeMergeableLegs (legs) {
	return legs.reduce((legStack, leg) => {
		const lastType = legStack.length && [...legStack].pop().type;

		switch (leg.type) {
			case 'tube':
			case 'overground':
				if (['tube', 'overground'].includes(lastType)) {
					return legStack.concat(Object.assign(deepCopy(legStack.pop()), {
						toNaptanId: leg.toNaptanId
					}));
				} else {
					return legStack.concat(leg);
				}
			case 'bus':
				const stackCopy = [...legStack];
				let prevLeg = stackCopy.pop();
				while (prevLeg) {
					if (prevLeg.type === 'bus') {
						if (!prevLeg.hopperApplied) {
							prevLeg.hopperApplied = true;
							return legStack; // don't add this free hopper journey
						} else {
							return legStack.concat(leg);
						}
					} else if (prevLeg.type !== 'walking') {
						return legStack.concat(Object.assign({}, leg, {hopperApplied: true}));
					}
					prevLeg = stackCopy.pop();
				}
			default:
				return legStack.concat(leg);
		}
	}, []);
}

export default (journeyLegs) => {
	return getTotalCost(mergeMergeableLegs(journeyLegs));
}
