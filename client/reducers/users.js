function users(state = [], action){
	switch(action.type){
		case 'LOGIN':
			console.log('ajax call to twitch');
			return [
				...state, {
					users: action.info
				}
			];
		default:
			return state;
	}
}

export default users;