import React from 'react';

class ProfileDisplay extends React.Component{
	
	render(){
		const { user } = this.props
		return(
			<div>
				<img className="profileImage" src={user.logo} />
				<h4>{user.display_name}</h4>
				<p>{user.bio}</p>
			</div>
		);
	}
}

export default ProfileDisplay;