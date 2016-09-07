import React from 'react';
import initGoogleApi from './google-stuff/init-api';
import signInToGoogle from './google-stuff/sign-in';
import './App.css';

const App = React.createClass({

	componentDidMount: function() {
		initGoogleApi()
			.then(() => console.log('google API initialised'));
	},

	signInToGoogle: () => {
		signInToGoogle()
			.then(() => console.log('signed into google'));
	},

	render: function () {
		return (
			<div>
				<h1>CycleSave</h1>
				<button onClick={this.signInToGoogle}>Let me take a peek at your Google Fit stuff to see what's up</button>

				<p>Disclaimer: All this stuff remains between you and Google. I'm not saving any your info anywhere, all this stuff appears on this page and then vanishes</p>
			</div>
		);
	}
});

export default App;
