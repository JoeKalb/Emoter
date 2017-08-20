function profile(state = [], action){
	switch(action.type){
		case 'LOGIN':
			console.log('ajax call to twitch');
			return [
				...state, {
					profile: action.info
				}
			];
		default:
			return state;
	}
}

export default profile;