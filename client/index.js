import React from "react";
import { render } from "react-dom";
require("!style-loader!css-loader!sass-loader!../sass/test.sass");
import { Route, Link, Switch } from 'react-router-dom';

import About from './components/About';
import App from './components/App';
import Home from './components/Home';
import Profile from './components/Profile';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store';

const container = document.getElementById('container');

const router = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/About" component={About}></Route>
				<Route path="/Profile" component={Profile}></Route>
			</Switch>
		</ConnectedRouter>
	</Provider>
);

render(router, container);