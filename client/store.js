import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { BrowserHistory } from 'react-router-dom';

import rootReducer from './reducers/index';

import todos from './data/todos';
import users from './data/users';

import createHistory from 'history/createBrowserHistory';

// create an object for the default data
const defaultState = {
	todos,
	users
};

const enchancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const middleware = routerMiddleware(history);

export const history = createHistory();

const store = createStore(rootReducer, defaultState, applyMiddleware(middleware), enchancers);

if(module.hot){
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	})
}

export default store;