import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, Link, browserHistory } from 'react-router';

import Lol from './dev-stuff/Lol';
import Nope from './dev-stuff/nope';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="lol" component={Lol} />
    <Route path="*" component={Nope} />
  </Router>,
  document.getElementById('root')
);
