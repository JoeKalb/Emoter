import React from 'react';
import Main from './Main';

class About extends React.Component {
	render() {
		return (
			<div>
				<Main />
				<div className="container">
					<h4>About</h4>
					<p>This part should be changing real time!</p>
				</div>
			</div>);
	}
} 

export default About;