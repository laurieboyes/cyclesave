describe('Getting journey costs', () => {

	afterEach(() => {
		jest.resetModules()
	});

	it('should handle just bus journey', () => {
		return require('./get-journey-cost').default(
			[{"type": "walking"}, {"type": "bus"}, {"type": "walking"}]
		).then(res => expect(res).toEqual(1.50));
	});

	it('should handle a tube then overground journey', () => {

		jest.mock('./tfl-client', () => ({
				fetchTubeAndOvergroundFare: jest.fn(() => Promise.resolve(2.8))
			})
		);

		return require('./get-journey-cost').default(
			[
				{
					"type": "walking"
				},
				{
					"type": "tube",
					"fromNaptanId": "940GZZLULNB",
					"toNaptanId": "940GZZLUCWR"
				},
				{
					"type": "overground",
					"fromNaptanId": "910GCNDAW",
					"toNaptanId": "910GFORESTH"
				},
				{
					"type": "walking"
				}
			]
		)
			.then(res => {
				expect(res).toEqual(2.80);
				expect(require('./tfl-client').fetchTubeAndOvergroundFare.mock.calls).toEqual([
					[
						'940GZZLULNB',
						'910GFORESTH'
					]
				]);

			});
	})

	it('should return NaN when there\'s part of the journey we can\'t cost', () => {
		return require('./get-journey-cost').default(
			[
				{"type": "walking"},
				{"type": "bus"},
				{"type": "walking"},
				{"type": "skateboarding"}
			]
		).then(res => expect(res).toEqual(NaN));
	});
});
