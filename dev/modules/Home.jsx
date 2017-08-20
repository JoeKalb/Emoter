import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class Home extends React.Component {
	
	render() {
		return (
			<div id="container">
				<a href="https://api.twitch.tv/kraken/oauth2/authorize?client_id=qu40xwrhqo12kl3g3isdqcma9rma8n&redirect_uri=http://localhost:3001&response_type=code&scope=user_read"><Button bsSize="large" block id="login">Login with Twitch</Button></a>
			</div>
		);
	}
};

export default Home;