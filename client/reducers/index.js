import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import todos from './todos';

const rootReducer = combineReducers({todos, users, routing: routerReducer});

export default rootReducer;