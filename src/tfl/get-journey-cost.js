import { fetchTubeAndOvergroundFare } from './tfl-client'
import deepCopy from '../util/deep-copy'

function getLegCost (leg) {
	switch (leg.type) {
		case 'tube':
		case 'overground':
			return fetchTubeAndOvergroundFare(leg.fromNaptanId, leg.toNaptanId);
		case 'bus':
			return Promise.resolve(1.5);
			break;
		default:
			return Promise.resolve(0);
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
				}
			default:
				return legStack.concat(leg);
		}
	}, []);
}

export default (journeyLegs) => {
	return getTotalCost(mergeMergeableLegs(journeyLegs));
}
