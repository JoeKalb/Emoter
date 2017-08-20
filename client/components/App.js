import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Profile from './Profile.js';
require("!style-loader!css-loader!sass-loader!../../sass/test.sass");


class App extends React.Component{
	render() {
		return (
			<div>
      		<ul>
        		<li><Link to="/">Home</Link></li>
        		<li><Link to="/about">About</Link></li>
        		<li><Link to="/profile">Profile</Link></li>	
            <input placeholder="Search Artists"></input>
      		</ul>

      		<hr/>
          
      		<Route exact path="/" component={Home}/>
      		<Route path="/about" component={About}/>
      		<Route path="/profile" component={Profile}/>
    	</div>
		);
	}
}

export default App;