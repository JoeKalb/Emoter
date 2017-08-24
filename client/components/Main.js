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
						<li><Link to="/profile">
							<FontAwesome
								name="home"
							/>
						</Link></li>
        		<li><Link to="/about">
							<FontAwesome
								name="info"
							/>
						</Link></li>
	          <li>
							<div className="searchDiv">
								<FontAwesome
									name="search" /> <input type="text" placeholder="Search Artist"></input>
							</div>
						</li>
						<li id="logout"><Link to="/">
							<FontAwesome
								name="sign-out"
							/></Link></li>
      		</ul>
    	</div>
		);
	}
}

export default Main;
