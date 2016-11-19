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
				type: 'walking',
				summary: 'Walk to Forest Hill Station'
			},
			{
				type: 'overground',
				summary: 'London Overground to Crystal Palace Rail Station',
				fromNaptanId: '910GFORESTH',
				toNaptanId: '910GCRYSTLP'
			},
			{
				type: 'national-rail',
				summary: 'Southern to Tulse Hill',
				fromNaptanId: '490G01078M',
				toNaptanId: '490G01298G'
			},
			{
				type: 'bus',
				summary: '2 bus or 432 bus to Craignair Road'
			},
			{
				type: 'walking',
				summary: 'Walk to Claverdale Road, Tulse Hill'
			}
		]);
	})
});

