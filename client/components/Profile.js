import React from 'react';
import Main from './Main';
import ProfileDisplay from './ProfileDisplay';
import CommissionList from './CommissionList';
import CONFIG from '../../config.js';

class Profile extends React.Component {

	constructor(props){
		super(props);
		this.state = {user: {}};
		this.state = {tokens: {}};

		this.getCodeFromURL = this.getCodeFromURL.bind(this);
		this.getInfo = this.getInfo.bind(this);
		this.allUserInfo = this.allUserInfo.bind(this);
		this.localOauthCall = this.localOauthCall.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount(){
		//this.getInfo(this.getCodeFromURL()); // use for front end only
		this.localOauthCall(this.getCodeFromURL());
	}

	localOauthCall(code) {
		let url = 'http://localhost:3000/api/v1/twitch/' + code;
		let promise = fetch(url, {
			method: "GET"
		}).then((res) => {
			return res.json()
		}).then((data) => {
			console.log(data);
			this.setState({ tokens: data });
			this.allUserInfo();
		}).catch((err) => {
			console.log(err);
		})
	}

	getInfo(code) {
		let call = 'https://api.twitch.tv/kraken/oauth2/token?client_id={client_ID}&client_secret={client_secret}&code={code}&grant_type=authorization_code&redirect_uri={redirect}';
		call = call.replace('{client_ID}', CONFIG.client_id)
				.replace('{client_secret}', CONFIG.client_secret)
				.replace('{code}', code)
				.replace('{redirect}', CONFIG.redirect_uri);
		let promise = fetch(call,{
			method: "POST"
		}).then((res) => {
			return res.json();
		}).then((data) => {
			this.setState({ tokens: data });
			this.allUserInfo();
		});
	}

	getCodeFromURL() {
		let path = window.location.href.replace('http://localhost:3001/profile?', '');
		let info = path.split('&');
		let mapped = info.map((item) => {
			let pair = item.split('=');
			let obj = {};
			obj[pair[0]] = pair[1];
			return obj;
		});
		let result = mapped[0].access_token || mapped[0].code;
		return result;
	}

	allUserInfo() {
		let header = new Headers();
		header.append('Accept', 'application/vnd.twitchtv.v5+json');
		header.append('Client-ID', CONFIG.client_id);
		header.append('Authorization', 'OAuth ' + this.state.tokens.access_token);
		let promise = fetch('https://api.twitch.tv/kraken/user', {
			method: "GET",
			headers: header
		}).then((res) => {
			return res.json();
		}).then((data) => {
			this.setState({user: data});
			console.log(this.state.user);
		});
	}

	handleClick(){
		console.log('clicked');
		this.localOauthCall(this.getCodeFromURL());
	}

	render() {
		const {user} = this.state;

		return (
			<div>
				<Main />
				<div className="page">
					{this.state && user &&
						<ProfileDisplay user={user} />
					}
					<CommissionList />
				</div>
			</div>
		);
	}
}

export default Profile;
