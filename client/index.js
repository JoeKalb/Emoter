import React from "react";
import { render } from "react-dom";
require("!style-loader!css-loader!sass-loader!../sass/default.sass");
import { Route, Link, Switch } from 'react-router-dom';

import About from './components/About';
import App from './components/App';
import Home from './components/Home';
import Profile from './components/Profile';
import Main from './components/Main';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store';

const root = document.getElementById('root');

const router = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch component={App}>
				<Route exact path="/" component={Home}></Route>
				<Route path="/About" component={About}></Route>
				<Route path="/Profile" component={Profile}></Route>
			</Switch>
		</ConnectedRouter>
	</Provider>
);

render(router, root);
