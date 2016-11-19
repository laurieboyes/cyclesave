describe('Getting journey costs', () => {

	afterEach(() => {
		jest.resetModules();
	});

	it('should handle just bus journey', () => {
		return require('./get-journey-cost').default(
			[{"type": "walking"}, {"type": "bus"}, {"type": "walking"}]
		).then(res => expect(res).toEqual(1.50));
	});

	describe('Dealing with hopper fare', () => {

		it('should apply a free hopper journey if there are two in a row', () => {

			return require('./get-journey-cost').default(
				[
					{
						"type": "bus",
						"summary": "185 bus to Grove Tavern"
					},
					{
						"type": "bus",
						"summary": "P13 bus to Tulse Hill Station"
					}]
			).then(res => expect(res).toEqual(1.5));
		});

		it('should still apply hopper fare if there is a walk in between', () => {

			return require('./get-journey-cost').default(
				[
					{
						"type": "bus",
						"summary": "P13 bus to Tulse Hill Station"
					},
					{
						"type": "walking",
						"summary": "Get off at Hardel Rise"
					},
					{
						"type": "bus",
						"summary": "415 bus or 432 bus to Craignair Road"
					}]
			).then(res => expect(res).toEqual(1.5));
		});

		it('should not apply hopper fare if there is a tube ride or whatever in between', () => {

			// free tube journey so generous
			jest.mock('./tfl-client', () => ({
					fetchTubeAndOvergroundFare: jest.fn(() => Promise.resolve(0))
				})
			);


			return require('./get-journey-cost').default(
				[
					{
						"type": "bus",
						"summary": "P13 bus to Tulse Hill Station"
					},
					{
						"type": "tube",
						"summary": "Get off at Hardel Rise"
					},
					{
						"type": "bus",
						"summary": "415 bus or 432 bus to Craignair Road"
					}]
			).then(res => expect(res).toEqual(3));
		});

		it('should apply one free hopper journey when there are three in a row', () => {

			return require('./get-journey-cost').default(
				[
					{
						"type": "bus",
						"summary": "185 bus to Grove Tavern"
					},
					{
						"type": "bus",
						"summary": "P13 bus to Tulse Hill Station"
					},
					{
						"type": "bus",
						"summary": "415 bus or 432 bus to Craignair Road"
					}]
			).then(res => expect(res).toEqual(3));
		});
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
	});

	it('should throw an error when there\'s part of the journey we can\'t cost', () => {
		return require('./get-journey-cost').default(
			[
				{"type": "walking"},
				{"type": "bus"},
				{"type": "walking"},
				{"type": "skateboarding"}
			]
		)
			.then(() => {
				throw new Error('should not succeed');
			})
			.catch(err => {
				expect(err.message).toEqual('Cannot cost leg {"type":"skateboarding"}');
			});
	});
});
