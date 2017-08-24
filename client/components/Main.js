import React from 'react';
import {Link, Route} from 'react-router-dom';
import Login from './Login';
require("!style-loader!css-loader!sass-loader!../../sass/topnav.sass");
import FontAwesome from 'react-fontawesome';

class Main extends React.Component{
	render() {
		return (
			<div id="nav">
      		<ul>
        		<li><Link to="/about">About</Link></li>
        		<li><Link to="/profile">Profile</Link></li>
	          <li>
							<div className="searchDiv">
								<FontAwesome
									name="search" /> <input type="text" placeholder="Search Artist"></input>
							</div>
						</li>
						<li id="logout"><Link to="/">Logout</Link></li>
      		</ul>
    	</div>
		);
	}
}

export default Main;
