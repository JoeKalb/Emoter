import React from 'react';
import Main from './Main';

class Home extends React.Component {
	
	render() {
		return (
			<div>
				<div className="login">
					<a href="https://api.twitch.tv/kraken/oauth2/authorize?client_id=qu40xwrhqo12kl3g3isdqcma9rma8n&redirect_uri=http://localhost:3001/profile&response_type=code&scope=user_read"><button>Login with Twitch</button></a>
				</div>
			</div>
		);
	}
};

export default Home;