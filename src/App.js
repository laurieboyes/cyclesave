import React from 'react';
import initGoogleApi from './google-stuff/init-api'
import './App.css';

const App = React.createClass({

	getInitialState: () => {
		return initGoogleApi();
	},

	render: () => {
		return (
			<div>
				<h1>CycleSave</h1>
				<p>cool</p>
			</div>
		);
	}
});

export default App;
