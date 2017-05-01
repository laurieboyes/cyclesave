import React from 'react';
import initGoogleApi from './google-stuff/init-api';
import signInToGoogle from './google-stuff/sign-in';
import getBikeRides from 'get-google-fit-bike-rides';
import './App.css';
import BikeRideList from './components/BikeRideList'
import TflJourneyPlan from './tfl/TflJourneyPlan'
import directly from 'directly';
import tap from './util/tap';
import getDistanceMetres from './util/get-distance-metres';
import centralLondonLatLng from './util/central-london-lat-lng';

import flags from './dev-stuff/flags';
import fakeOneBikeRide from './dev-stuff/fixtures/one-bike-ride';
import fakeLoadsOfBikeRides from './dev-stuff/fixtures/loads-of-bike-rides';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			bikeRides: [],
			status: '',
			prettyStatus: 'Ready to go'
		};
	}

	componentDidMount () {
		initGoogleApi()
			.then(() => console.log('google API initialised'));

		//seems like setting value on a react date input means I can't change it?
		document.querySelector('.js-from-date').value = new Date(0).toISOString().substring(0, 10);
		document.querySelector('.js-to-date').value = new Date().toISOString().substring(0, 10);
	}

	addUnfetchedJourneyPlans (bikeRides) {
		return bikeRides.map(bikeRide => Object.assign({}, bikeRide, {
			journeyPlan: new TflJourneyPlan(bikeRide.startLatLang, bikeRide.endLatLang, bikeRide.startTime)
		}))
	}

	// This gets all the journey plans for all the journeys all at once
	// Think the TFL API is pretty forgiving but maybe experiment and batch with directly
	fetchJourneyPlans (journeyPlans) {
		console.log('fetching journey plans', journeyPlans);
		return directly(1, journeyPlans.map(journeyPlan => {
			return () => journeyPlan.fetchPlan()
				.then(() => {
					this.forceUpdate();
				})
				.catch(err => {
					console.log(err);
				})
		})).then(() => {
			console.log('finished fetching journey plans');
		});
	}

	fetchCosts (journeyPlans) {
		console.log('fetching journey costs');
		// todo definitely need to directly this - batch it up. Try one at a time and see how we go
		// Maybe have loading bar
		return Promise.all(journeyPlans.map(journeyPlan => {
			return journeyPlan.fetchCosts()
				.then(() => {
					this.forceUpdate();
				});
		}))
	}


	handleGetBikeRidesSubmit (e) {
		e.preventDefault();

		this.setState({ status: 'loading' });

		const fromDate = new Date(e.target.querySelector('.js-from-date').value);
		const toDate = new Date(e.target.querySelector('.js-to-date').value);

		this.setState({ prettyStatus: 'Signing into Google' });

		return signInToGoogle()
			.then(() => {
				this.setState({ prettyStatus: 'Fetching bikeride stuff from Google Fit (this may take a minute)' });

				if (flags.fakeLoadsOfGoogleStuff) {
					console.log('faking loads of bike rides');
					return Promise.resolve(fakeLoadsOfBikeRides);
				} else if (flags.fakeGoogleStuff) {
					console.log('faking one bike ride');
					return Promise.resolve(fakeOneBikeRide);
				}

				return getBikeRides(fromDate, toDate);
			})
			.then(tap(bikeRides => {
				console.log('bikeRides', bikeRides)
			}))
			.then(bikeRides => bikeRides

				// assume any journey shorter than 100 metres is bogus
				// todo move me into get-bike-rides?
				.filter(bikeRide => getDistanceMetres(bikeRide.startLatLang, bikeRide.endLatLang) > 100)

				// assume any journey that starts or ends more than 40km (???) from London is outside of TFL planning range
				.filter(bikeRide => getDistanceMetres(centralLondonLatLng, bikeRide.startLatLang) < 1000 * 40)
				.filter(bikeRide => getDistanceMetres(centralLondonLatLng, bikeRide.endLatLang) < 1000 * 40)
			)
			.then(bikeRides => {
				this.setState({
					status: 'loaded',
					bikeRides: this.addUnfetchedJourneyPlans(bikeRides),
					prettyStatus: 'Fetching TFL journey plans for all bikerides'
				})
				return new Promise(resolve => {
					//do this so we get the status update
					setImmediate(() => {
						resolve(this.fetchJourneyPlans(this.state.bikeRides.map(br => br.journeyPlan)));
					})
				})

			})
			.then(() => {
				this.setState({ prettyStatus: 'Fetching costs for all potential journeys' });
				return this.fetchCosts(this.state.bikeRides.map(br => br.journeyPlan))
			})
			.then(() => {
				this.setState({ prettyStatus: 'All done' });
			});
	}

	renderBikeRides () {
		let bikeBit;
		switch (this.state.status) {
			case 'loading':
				bikeBit = 'Loading...';
				break;
			case 'loaded':
				bikeBit = <BikeRideList items={this.state.bikeRides} />;
				break;
			default:
				bikeBit = '';
		}

		return (
			<div className="bike-ride-list-container">
				{bikeBit}
			</div>
		);
	}

	render () {
		return (
			<div>
				<h1>CycleSave</h1>

				<p>Let me take a peek at your Google Fit stuff to see what's up</p>
				<p>Status: {this.state.prettyStatus}</p>
				<form onSubmit={this.handleGetBikeRidesSubmit.bind(this)}>
					<label for='fromDate'>From</label>&nbsp;
					<input id='fromDate' type='date' className='js-from-date' />&nbsp;
					<label for='toDate'>To</label>&nbsp;
					<input id='toDate' type='date' className='js-to-date' />&nbsp;
					<input type='submit' value='Get bike rides' />
				</form>
				{this.renderBikeRides()}
				<p>Disclaimer: All this stuff remains between you and Google. I'm not saving any your info anywhere, all
					this stuff appears on this page and then vanishes</p>
			</div>
		);
	}
}
