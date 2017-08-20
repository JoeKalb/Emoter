import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import App from './modules/App.jsx';

const container = document.getElementById('container');

ReactDOM.render(
	
	<Router>
		<App/>
	</Router>,

	container
);