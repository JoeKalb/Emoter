import React from 'react';
import Main from './Main';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<Main />
				<div className="container">
					<h4>Profile</h4>
					<p>This is where the profiles will be!</p>
				</div>
			</div>);
	}
} 

export default Profile;