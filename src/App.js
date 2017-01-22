import React from 'react';
import initGoogleApi from './google-stuff/init-api';
import signInToGoogle from './google-stuff/sign-in';
import getBikeRides from './bike-rides/get-bike-rides';
import './App.css';
import BikeRideList from './components/BikeRideList.js'
import TflJourneyPlan from './tfl/TflJourneyPlan'

export default class App extends React.Component {

	constructor () {
		super();
		this.state = {
			bikeRides: [],
			status: ''
		};
	}

	componentDidMount () {
		initGoogleApi()
			.then(() => console.log('google API initialised'));
	}

	handleGetBikeRidesSubmit(e) {
		e.preventDefault();
		const fromDate = e.target.querySelector('.js-from-date').value
		const toDate = e.target.querySelector('.js-to-date').value
		this.signInToGoogleAndGetSomeBikeRides(fromDate, toDate);
	}

	signInToGoogleAndGetSomeBikeRides (fromDate, toDate) {
		this.setState({status: 'loading'});
		return signInToGoogle()
			.then(() => getBikeRides(new Date(fromDate), new Date(toDate)))
			.then(bikeRides => bikeRides.map(bikeRide => Object.assign({}, bikeRide, {
				journeyPlan: new TflJourneyPlan(bikeRide.startLatLang, bikeRide.endLatLang, bikeRide.startTime)
			})))
			.then(bikeRides => this.setState({
				status: 'loaded',
				bikeRides
			}))
			.then(() => {
				this.state.bikeRides.forEach(bikeRide => bikeRide.journeyPlan.fetchPlan().then(() => bikeRide)
						.then(bikeRide => {
							this.forceUpdate();
							return bikeRide.journeyPlan.fetchCosts();
						})
						.then(() => this.forceUpdate())
				)
			});
	}

	renderBikeRides () {

		let bikeBit;
		switch (this.state.status) {
			case 'loading':
				bikeBit = 'Loading...';
				break;
			case 'loaded':
				bikeBit = <BikeRideList items={this.state.bikeRides}/>;
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
				<form onSubmit={this.handleGetBikeRidesSubmit.bind(this)}>
					<label for='fromDate'>From</label>
					<input id='fromDate' type='date' className='js-from-date'/>
					<label for='toDate'>To</label>
					<input id='toDate' type='date' className='js-to-date'/>
					<input type='submit' value='Get bike rides'/>
				</form>
				{this.renderBikeRides()}
				<p>Disclaimer: All this stuff remains between you and Google. I'm not saving any your info anywhere, all
					this stuff appears on this page and then vanishes</p>
			</div>
		);
	}
}
