import React from 'react';
import initGoogleApi from './google-stuff/init-api';
import signInToGoogle from './google-stuff/sign-in';
import getBikeRides from './bike-rides/get-bike-rides';
import './App.css';

const App = React.createClass({

	componentDidMount: function() {
		initGoogleApi()
			.then(() => console.log('google API initialised'));
	},

	signInToGoogleAndGetSomeBikeRides: () => {
		signInToGoogle()
			.then(() => console.log('signed into google'))
			.then(() => {
				return getBikeRides(new Date('2016-08-01'), new Date('2016-09-01'))
			});
	},

	render: function () {
		return (
			<div>
				<h1>CycleSave</h1>
				<p>Let me take a peek at your Google Fit stuff to see what's up</p>
				<button onClick={this.signInToGoogleAndGetSomeBikeRides}>Get bike rides in August 2016</button>

				<p>Disclaimer: All this stuff remains between you and Google. I'm not saving any your info anywhere, all this stuff appears on this page and then vanishes</p>
			</div>
		);
	}
});

export default App;
