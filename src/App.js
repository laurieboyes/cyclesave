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

	signInToGoogleAndGetSomeBikeRides () {
		this.setState({status: 'loading'});
		return signInToGoogle()
			.then(() => getBikeRides(new Date('2016-08-01'), new Date('2016-09-01')))
			.then(bikeRides => bikeRides.map(bikeRide => Object.assign({}, bikeRide, {
				journeyPlans: new TflJourneyPlan(bikeRide.startLatLang, bikeRide.endLatLang, bikeRide.startTime)
			})))
			.then(bikeRides => this.setState({
				status: 'loaded',
				bikeRides
			}))
			.then(() => {
				this.state.bikeRides.forEach(bikeRide => bikeRide.journeyPlans.fetchPlan().then(() => this.forceUpdate()));
			})
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
				<button onClick={this.signInToGoogleAndGetSomeBikeRides.bind(this)}>Get bike rides in August 2016
				</button>
				{this.renderBikeRides()}
				<p>Disclaimer: All this stuff remains between you and Google. I'm not saving any your info anywhere, all
					this stuff appears on this page and then vanishes</p>
			</div>
		);
	}
}
