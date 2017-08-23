import React from 'react';
import FontAwesome from 'react-fontawesome';
require("!style-loader!css-loader!sass-loader!../../sass/profiledisplay.sass");

class ProfileDisplay extends React.Component{

	render(){
		const { user } = this.props
		return(
			<div className="profileDisplay">
				<img className="profileImage" src={user.logo} />
				<div className="profileInfo">
					<a href={"https://twitch.tv/"+user.name} target="_blank">
						<h4>
							<FontAwesome
								className='super-crazy-colors'
				        name='twitch'
				        size="lg"
							/> {user.display_name}
						</h4>
					</a>
					<p>{user.bio}</p>
				</div>
			</div>
		);
	}
}

export default ProfileDisplay;
