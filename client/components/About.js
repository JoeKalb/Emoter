import React from 'react';
import Main from './Main';

class About extends React.Component {
	render() {
		return (
			<div id="container">
				<Main />
				<h4>About</h4>
				<p>This part should be changing real time!</p>
			</div>);
	}
} 

export default About;