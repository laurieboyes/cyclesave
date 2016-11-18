import TflJourney from './TflJourney';
import rawJourneyFixture from './test-fixtures/journey.json';

describe('Making a TflJourney from the raw data', () => {
	it('Makes an array of legs', () => {
		const journey = new TflJourney(rawJourneyFixture);
		expect(journey.legs).toBeInstanceOf(Array);
	});

	it('Gets all of the legs', () => {
		const journey = new TflJourney(rawJourneyFixture);
		expect(journey.legs.length).toBe(5);
	});

	it('Gets the useful leg data', () => {
		const journey = new TflJourney(rawJourneyFixture);
		expect(journey.legs).toEqual([
			{
				type: 'walking'
			},
			{
				type: 'overground',
				fromNaptanId: '910GFORESTH',
				toNaptanId: '910GCRYSTLP'
			},
			{
				type: 'national-rail',
				fromNaptanId: '490G01078M',
				toNaptanId: '490G01298G'
			},
			{
				type: 'bus'
			},
			{
				type: 'walking'
			}
		]);
	})
});

