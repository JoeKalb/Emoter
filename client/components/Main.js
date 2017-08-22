import React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './Home';

class Main extends React.Component{
	render() {
		return (
			<div id="nav">
      		<ul>
        		<li><Link to="/">Home</Link></li>
        		<li><Link to="/about">About</Link></li>
        		<li><Link to="/profile">Profile</Link></li>	
            <input placeholder="Search Artists"></input>
      		</ul>
    	</div>
		);
	}
}

export default Main;